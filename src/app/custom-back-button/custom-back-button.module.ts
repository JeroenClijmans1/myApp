import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CustomBackButtonComponent } from "./custom-back-button.component";

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [CustomBackButtonComponent],
  exports: [CustomBackButtonComponent]
})
export class CustomBackButtonComponentModule {}
