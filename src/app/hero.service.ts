import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class HeroService {

  constructor(
    private messageService: MessageService,
    private angularFirestore: AngularFirestore
    ) { }

  getHeroes() {
    // Obtiene toda la colección de héroes del almacenamiento Firestore
    return this.angularFirestore.collection("heroes").snapshotChanges();
  }
}
