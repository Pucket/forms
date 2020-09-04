import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormContatoPage } from './form-contato.page';

const routes: Routes = [
  {
    path: '',
    component: FormContatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormContatoPageRoutingModule {}
