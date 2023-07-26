import { Pipe, PipeTransform } from '@angular/core';
import { Specialty } from '../interfaces/specialty.interface';
import { Doctor } from '../interfaces/doctor.interface';
import { Services } from '../interfaces/services.interface';
import { SpecialtiesService } from './specialties.service';

@Pipe({
  name: 'filterBy',
})
export class FilterByPipe implements PipeTransform {
  transform(
    unsortedArray: (Specialty | Doctor | Services)[],
    searchedInput: string
  ): (Specialty | Doctor | Services)[] {
    const sortedArray = unsortedArray.filter((clinicEntity: Specialty | Doctor | Services) =>
      Object.values(clinicEntity).find((attributesInEntities: any) => {
        if (typeof attributesInEntities == 'number') {
          const searchedInputToNumber = Number(searchedInput);

          return searchedInputToNumber === attributesInEntities;
        }
        if (typeof attributesInEntities !== 'object') {
          const equalizedStringInEntities = attributesInEntities
            .normalize('NFD')
            .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '');
          const equalizedStringInSearchInput = searchedInput
            .normalize('NFD')
            .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '');

          return equalizedStringInEntities.toLowerCase().includes(equalizedStringInSearchInput.toLowerCase());
        }

        return attributesInEntities.includes(searchedInput);
      })
    );
    return sortedArray.length ? sortedArray : unsortedArray;
  }
}
