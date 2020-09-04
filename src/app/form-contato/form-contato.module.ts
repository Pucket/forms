import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormContatoPageRoutingModule } from './form-contato-routing.module';

import { FormContatoPage } from './form-contato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormContatoPageRoutingModule
  ],
  declarations: [FormContatoPage]
})
export class FormContatoPageModule {}
