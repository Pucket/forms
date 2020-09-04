import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-tarefa',
  templateUrl: './form-tarefa.page.html',
  styleUrls: ['./form-tarefa.page.scss'],
})
export class FormTarefaPage implements OnInit {
  
  nome: string;
  descricao: string;
  constructor() { }

  ngOnInit() {
  }

  enviarTarefa(){
    console.log("Nome: " + this.nome);
    console.log("Descrição: " + this.descricao)
  }
}
