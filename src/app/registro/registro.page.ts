import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { AutenticacaoService } from '../services/autenticacao.service'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  email: string;
  senha: string;

  constructor(private service: AutenticacaoService,
              private nav: NavController) { }

  ngOnInit() {
  }

  cadastrar(){
    let registro = {};
    registro['email'] = this.email;
    registro['senha'] = this.senha;

    this.service.cadastrarUsuario(registro).then(
      res => {
        this.nav.navigateForward('/home');
      }, err => {
        console.log(err);
      }
    );
  }

}
