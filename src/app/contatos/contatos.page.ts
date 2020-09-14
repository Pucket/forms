import { Component, OnInit } from '@angular/core';

import { ContatoService } from '../services/contato.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.page.html',
  styleUrls: ['./contatos.page.scss'],
})
export class ContatosPage implements OnInit {

  contatos: any;

  constructor( private service: ContatoService) { }

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

}
