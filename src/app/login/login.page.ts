import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { AutenticacaoService } from '../services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  senha: string;

  constructor(private nav: NavController,
              private service: AutenticacaoService ) { }

  ngOnInit() {
  }

  logar(){
    let registro = {};
    registro['email'] = this.email;
    registro['senha'] = this.senha;

    this.service.login(registro).then(
      res => {
        this.nav.navigateForward('/home');
      }, err => {
        console.log(err);
      }
    );
  }

}
