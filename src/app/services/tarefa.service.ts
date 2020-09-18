import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor ( private firestore: AngularFirestore ) { }
    
    incluir(tarefa: any){
      return this.firestore.collection("tarefa").add(tarefa);
    }

    listar(){
      return this.firestore.collection("tarefa").snapshotChanges();
    }

    alterar(tarefa, id){
      return this.firestore.doc('tarefa/' + id).update(tarefa);
    }

    excluir(tarefa) {
      return this.firestore.doc('tarefa/' + tarefa.id).delete();
    }
}
