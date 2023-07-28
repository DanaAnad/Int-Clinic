import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  DocumentData,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { Specialty } from '../interfaces/specialty.interface';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpecialtiesService {
  specialities!: DocumentData[];

  constructor(private dataBase: Firestore) {
    this.getSpecialties();
  }

  addSpecialty(newSpecialtyObj: Omit<Specialty, 'id'>) {
    const specialtyCollection = collection(this.dataBase, 'specialties');

    addDoc(specialtyCollection, newSpecialtyObj)
      .then(() => {
        console.log('Specialty added');
      })
      .catch(err => {
        console.log(err);
      });
  }

  getSpecialties() {
    const specialtyCollection = collection(this.dataBase, 'specialties');

    return collectionData(specialtyCollection, { idField: 'id' });
  }

  getSpecialty(id: string): Observable<DocumentData> {
    const docReference = doc(this.dataBase, 'specialties', id);
    return from(getDoc(docReference));
  }

  updateSpecialty(specialtyObject: Specialty) {
    const specialtyInstance = doc(this.dataBase, 'specialties', specialtyObject.id);
    const updatedSpecialty = {
      id: specialtyObject.id,
      name: specialtyObject.name,
      doctorIds: specialtyObject.doctorIds,
      description: specialtyObject.description,
    };

    updateDoc(specialtyInstance, updatedSpecialty)
      .then(() => {
        console.log('Specialty changed');
      })

      .catch(err => {
        console.log(err);
      });
  }

  deleteSpecialty(id: string) {
    const specialtyInstance = doc(this.dataBase, 'specialties', id);

    deleteDoc(specialtyInstance).then(() => {
      console.log('Specialty deleted');
    });
  }
}
