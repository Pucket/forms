import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ContatoService } from '../services/contato.service';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-contato',
  templateUrl: './form-contato.page.html',
  styleUrls: ['./form-contato.page.scss'],
})
export class FormContatoPage implements OnInit {

  nome: string;
  email: string;
  telefone: string;

  validacao: FormGroup;
  mensagemErro: string = '';

  id = null;
  constructor ( private service: ContatoService,
                private nav: NavController,
                private rota: ActivatedRoute,
                private formulario: FormBuilder ) { }

  ngOnInit() {
    this.id = this.rota.snapshot.params['id'];
    this.nome = this.rota.snapshot.params['nome'];
    this.email = this.rota.snapshot.params['email'];
    this.telefone = this.rota.snapshot.params['telefone'];

    console.log(this.id);

    this.validacao = this.formulario.group({
      nome: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(10)
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      telefone: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ]))

    });

  }

  mensagem_validacao = {
    'nome': [
      {type: 'required', message: 'Nome é obrigatório'},
      {type: 'minlength', message: 'Nome deve ter no mínimo dez caracteres'}
    ],
    'email': [
      {type: 'required', message: 'E-mail é obrigatório'},
      {type: 'pattern', message: 'E-mail é inválido'}
    ],
    'telefone': [
      {type: 'required', message: 'Telefone é obrigatório'},
      {type: 'minlength', message: 'Telefone deve ter no mínimo oito caracteres'}
    ],
  };

  enviarContato(){
    console.log(this.validacao.get('nome').value);
    let contato = {};

    console.log("Nome: " + this.nome);
    console.log("E-mail: " + this.email);
    console.log("Telefone: " + this.telefone);

    contato['nome'] = this.validacao.get('nome').value;
    contato['email'] = this.validacao.get('email').value;
    contato['telefone'] = this.validacao.get('telefone').value;

    console.log(contato);
    if (this.id == null){
      this.service.incluir(contato);
    } else {
      this.service.alterar(contato, this.id);
    }

    this.nav.navigateForward("contatos");
  }
}
