import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ContatoService } from '../services/contato.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.page.html',
  styleUrls: ['./contatos.page.scss'],
})
export class ContatosPage implements OnInit {

  contatos: any;

  constructor(private service: ContatoService,
              private nav: NavController,
              private rota: ActivatedRoute) { }

  ngOnInit() {
    this.service.listar().subscribe(data => {
      this.contatos = data.map(e => {
        return {
          id: e.payload.doc.id,
          nome: e.payload.doc.data()['nome'],
          email: e.payload.doc.data()['email'],
          telefone: e.payload.doc.data()['telefone']
        };
      }
        );
        console.log(this.contatos);
    }
    );
  }

  inicioAlteracao(registro){
    console.log(registro);
    this.nav.navigateForward( [ "form-contato",
      { id: registro.id,
        nome: registro.nome,
        email: registro.email,
        telefone: registro.telefone
      }
    ] );
  }
}
