import { Component, OnInit } from '@angular/core';

import { NavController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { TarefaService } from "../services/tarefa.service";

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.page.html',
  styleUrls: ['./tarefas.page.scss'],
})
export class TarefasPage implements OnInit {

  tarefas: any;

  constructor(private service: TarefaService,
              private rota: ActivatedRoute,
              private nav: NavController,
              private alerta: AlertController) { }

  ngOnInit() {
    this.service.listar().subscribe(data => {
      this.tarefas = data.map(e => {
        return {
          id: e.payload.doc.id,
          nome: e.payload.doc.data()['nome'],
          descricao: e.payload.doc.data()['descricao'],
        };
      }
        );
        console.log(this.tarefas);
    }
    );
  }

  inicioAlteracao(registro){
    console.log(registro);
    this.nav.navigateForward( [ "form-tarefa", 
      { id: registro.id,
        nome: registro.nome,
        descricao: registro.descricao
      }
    ] );
  }

  async remover(registro){

    const mensagem = await this.alerta.create({
      header: "Atenção",
      message: "Deseja excluir essa tarefa?",
      buttons: [
        {
          text: "Ok",
          handler:() => {
            this.service.excluir(registro);
            this.mensagemConfirmacao();
          }
        }, 
        {
          text: "Cancelar",
          handler:() => {
          }
        }
      ]
    });
    
    await mensagem.present();

    
  }

  async mensagemConfirmacao(){
    const confirmacao = await this.alerta.create({
      header: "Sucesso!",
      message: "Tarefa excluída com sucesso!",
      buttons: [
        {
          text: "Ok",
          handler:() => {}
        }
      ]
    });

    await confirmacao.present();

  }

  
}
