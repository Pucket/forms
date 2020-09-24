import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { AutenticacaoService } from '../services/autenticacao.service'

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  email: string;
  senha: string;

  validacao: FormGroup;
  mensagemErro: string = '';
  constructor(private service: AutenticacaoService,
              private nav: NavController,
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

  cadastrar(usuario){
    //let registro = {};
    //registro['email'] = this.email;
    //registro['senha'] = this.senha;

    this.service.cadastrarUsuario(usuario).then(
      res => {
        this.nav.navigateForward('/home');
      }, err => {
        console.log(err);
      }
    );
  }

}
