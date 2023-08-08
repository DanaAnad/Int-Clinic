import { DocumentData, Firestore, addDoc, collection, collectionData, query, where } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { AppointmentIds } from '../interfaces/appointment-ids.interface';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private dataBase: Firestore) {}

  addAppointment(appointment: AppointmentIds): Observable<DocumentData> {
    const appointmentCollection = collection(this.dataBase, 'appointments');
    return from(addDoc(appointmentCollection, appointment));
  }

  queryAppointments(doctorID: string, date: string) {
    const appointmentsRef = collection(this.dataBase, 'appointments');

    const q = query(appointmentsRef, where('doctorId', '==', `${doctorID}`), where('date', '==', `${date}`));

    return collectionData(q);
  }
}
