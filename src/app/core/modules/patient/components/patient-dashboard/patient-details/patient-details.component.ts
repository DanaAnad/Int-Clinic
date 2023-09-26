import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { PatientService } from 'src/app/core/services/patient.service';
import { ConfirmationDialogService } from '../../../../../services/confirmation-dialog.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss'],
})
export class PatientDetailsComponent {
  user!: any;
  constructor(
    private router: Router,
    private authUser: AuthService,
    private dialogService: ConfirmationDialogService,
    private patientService: PatientService
  ) {
    this.authUser.user$.subscribe(data => {
      this.user = data;
    });
  }
  confirmDeleteDialog(id: string, name: string) {
    const options = {
      title: 'Ștergere pacient',
      message: `Ești sigur că vrei să ștergi profilul pacientului ${name}? Vei pierde toate informatiile din cont.`,
      cancelText: 'Nu',
      confirmText: 'Da',
    };

    this.dialogService.open(options);

    this.dialogService.confirmed().subscribe(confirmed => {
      if (confirmed) {
        if (id) {
          this.patientService.deletePatient(id);
        }
        this.router.navigate(['/sign-up']);
      }
    });
  }
}
