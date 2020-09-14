import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor ( private firestore: AngularFirestore ) { }

    incluir(contato: any) {
      return this.firestore.collection("contato").add(contato);
    }

    listar(){
      return this.firestore.collection("contato").snapshotChanges();
    }
    
}
