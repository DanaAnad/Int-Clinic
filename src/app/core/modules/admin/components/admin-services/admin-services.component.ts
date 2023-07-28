import { Component, ViewChild } from '@angular/core';
import { ServicesService } from 'src/app/core/services/services.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Services } from 'src/app/core/interfaces/services.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { ThemePalette } from '@angular/material/core';
import { tap } from 'rxjs';
import { ConfirmationDialogService } from 'src/app/core/services/confirmation-dialog.service';

@Component({
  selector: 'app-admin-services',
  templateUrl: './admin-services.component.html',
  styleUrls: ['./admin-services.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdminServicesComponent {
  searchInput = '';

  dataSource!: MatTableDataSource<Services>;
  columnsToDisplay = ['name', 'price', 'id'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: Services;
  services: Services[] = [];

  pageSize = 5;
  pageSizeOptions: number[] = [5, 7, 10, 15, 20, 30];
  sortField = 'lastName';
  sortDirection: 'asc' | 'desc' = 'asc';
  showFirstLastButtons = true;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  loading = true;
  color: ThemePalette = 'primary';
  diameter = 50;

  constructor(
    private dataBase: ServicesService,
    private dialogService: ConfirmationDialogService
  ) {
    this.dataBase
      .getServices()
      .pipe(
        tap(data => {
          this.services = data as Services[];
          this.dataSource = new MatTableDataSource(this.services);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.loading = false;
          this.dataSource.filterPredicate = (data: Services, filter: string): boolean => {
            const dataStr = Object.keys(data)
              .reduce((currentTerm: string, key: string) => {
                return currentTerm + (data as { [key: string]: any })[key] + '◬';
              }, '')
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .toLowerCase();

            const transformedFilter = filter
              .trim()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .toLowerCase();

            return dataStr.indexOf(transformedFilter) != -1;
          };
        })
      )
      .subscribe();
  }

  confirmDeleteDialog(id: string, name: string) {
    const options = {
      title: 'Stergere serviciu',
      message: `Esti sigur ca vrei sa stergi serviciul ${name}?`,
      cancelText: 'Nu',
      confirmText: 'Da',
    };

    this.dialogService.open(options);

    this.dialogService.confirmed().subscribe(confirmed => {
      if (confirmed) {
        if (id) {
          this.dataBase.deleteService(id);
        }
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  onSortChange(sortEvent: Sort): void {
    this.sortField = sortEvent.active;
    this.sortDirection = sortEvent.direction as 'asc' | 'desc';
    this.paginator.firstPage();
    this.paginator.pageIndex = 0;
  }
}
