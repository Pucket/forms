import { Component } from '@angular/core';
import { NavController} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private nav: NavController, private rota: ActivatedRoute ) {

  }

  formTarefa(){
    console.log("Cheguei aqui");

    this.nav.navigateForward("form-tarefa");

    console.log("Continuo aqui");
  }

  formContato(){
    this.nav.navigateForward("form-contato");

  }

}
