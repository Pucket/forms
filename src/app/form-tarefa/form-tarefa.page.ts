import { Component, OnInit } from '@angular/core';

import { TarefaService } from '../services/tarefa.service';

@Component({
  selector: 'app-form-tarefa',
  templateUrl: './form-tarefa.page.html',
  styleUrls: ['./form-tarefa.page.scss'],
})
export class FormTarefaPage implements OnInit {
  
  nome: string;
  descricao: string;
  constructor ( private service: TarefaService ) { }

  ngOnInit() {
  }

  enviarTarefa(){
    let tarefa = {};

    console.log("Nome: " + this.nome);
    console.log("Descrição: " + this.descricao);

    tarefa['nome'] = this.nome;
    tarefa['descricao'] = this.descricao;

    this.service.incluir(tarefa);
  }
}
