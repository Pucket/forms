import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { TarefaService } from "../services/tarefa.service";

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.page.html',
  styleUrls: ['./tarefas.page.scss'],
})
export class TarefasPage implements OnInit {

  tarefas: any;

  constructor(private service: TarefaService,
              private rota: ActivatedRoute,
              private nav: NavController) { }

  ngOnInit() {
    this.service.listar().subscribe(data => {
      this.tarefas = data.map(e => {
        return {
          id: e.payload.doc.id,
          nome: e.payload.doc.data()['nome'],
          descricao: e.payload.doc.data()['descricao'],
        };
      }
        );
        console.log(this.tarefas);
    }
    );
  }

  inicioAlteracao(registro){
    console.log(registro);
    this.nav.navigateForward( [ "form-tarefa", 
      { id: registro.id,
        nome: registro.nome,
        descricao: registro.descricao
      }
    ] );
  }
}
