import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { RouterModule } from '@angular/router';
import { Interceptor } from './shared/helpers/interceptor.service';
import { UserModule } from './pages/user/user.module';

@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    UserModule,
    HttpClientModule,
    RouterModule.forRoot([]),
  ],
  providers: [

    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
