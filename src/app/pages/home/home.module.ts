import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './app-routing.module';
import { CardUserComponent } from '../../components/card-user/card-user.component';
import { ListUsersComponent } from 'src/app/components/list-users/list-users.component';



@NgModule({
  declarations: [
    HomeComponent,
    CardUserComponent,
    ListUsersComponent
    
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule { }
