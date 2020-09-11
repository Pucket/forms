import { Component, OnInit } from '@angular/core';

import { ContatoService } from '../services/contato.service';

@Component({
  selector: 'app-form-contato',
  templateUrl: './form-contato.page.html',
  styleUrls: ['./form-contato.page.scss'],
})
export class FormContatoPage implements OnInit {

  nome: string;
  email: string;
  telefone: string;

  constructor ( private service: ContatoService ) { }

  ngOnInit() {
  }

  enviarContato(){
    let contato = {};

    console.log("Nome: " + this.nome);
    console.log("E-mail: " + this.email);
    console.log("Telefone: " + this.telefone);

    contato['nome'] = this.nome;
    contato['email'] = this.email;
    contato['telefone'] = this.telefone;

    this.service.incluir(contato);
  }
}
