import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormTarefaPage } from './form-tarefa.page';

const routes: Routes = [
  {
    path: '',
    component: FormTarefaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormTarefaPageRoutingModule {}
