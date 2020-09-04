import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-contato',
  templateUrl: './form-contato.page.html',
  styleUrls: ['./form-contato.page.scss'],
})
export class FormContatoPage implements OnInit {

  nome: string;
  email: string;
  telefone: string;

  constructor() { }

  ngOnInit() {
  }

  enviarContato(){
    console.log("Nome: " + this.nome);
    console.log("E-mail: " + this.email);
    console.log("Telefone: " + this.telefone);
  }
}
