import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { AutenticacaoService } from '../services/autenticacao.service';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  senha: string;

  validacao: FormGroup;
  mensagemErro: string = '';
  constructor(private nav: NavController,
              private service: AutenticacaoService,
              private formulario: FormBuilder ) { }

  ngOnInit() {
    this.validacao = this.formulario.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      senha: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ]))

    });

  }

  mensagem_validacao = {
    'email': [
      {type: 'required', message: 'E-mail é obrigatório'},
      {type: 'pattern', message: 'E-mail inválido'}
    ],
    'senha': [
      {type: 'required', message: 'Senha é obrigatória'},
      {type: 'minLenght', message: 'A senha deve ter no mínimo seis caracteres'}
    ]
  };

  logar(valor){
    //let registro = {};
    //registro['email'] = this.email;
    //registro['senha'] = this.senha;

    this.service.login(valor).then(
      res => {
        this.nav.navigateForward('/home');
      }, err => {
        console.log(err);
      }
    );
  }

}
