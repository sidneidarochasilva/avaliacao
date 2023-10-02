import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
