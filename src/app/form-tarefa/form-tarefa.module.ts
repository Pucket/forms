import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormTarefaPageRoutingModule } from './form-tarefa-routing.module';

import { FormTarefaPage } from './form-tarefa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormTarefaPageRoutingModule
  ],
  declarations: [FormTarefaPage]
})
export class FormTarefaPageModule {}
