import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { TarefaService } from '../services/tarefa.service';

@Component({
  selector: 'app-form-tarefa',
  templateUrl: './form-tarefa.page.html',
  styleUrls: ['./form-tarefa.page.scss'],
})
export class FormTarefaPage implements OnInit {
  
  nome: string;
  descricao: string;

  id = null;
  constructor ( private service: TarefaService,
                private nav: NavController,
                private rota: ActivatedRoute ) { }

  ngOnInit() {
    this.id = this.rota.snapshot.params['id'];
    this.nome = this.rota.snapshot.params['nome'];
    this.descricao = this.rota.snapshot.params['descricao'];

    console.log(this.id);
  }

  enviarTarefa(){
    let tarefa = {};

    console.log("Nome: " + this.nome);
    console.log("Descrição: " + this.descricao);

    tarefa['nome'] = this.nome;
    tarefa['descricao'] = this.descricao;

    console.log(tarefa);
    if (this.id == null){
      this.service.incluir(tarefa);
    } else {
      this.service.alterar(tarefa, this.id);
    }

    this.nav.navigateForward("tarefas");
  }
}
