import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'user/:id', // Adicione /:id para tornar o parâmetro id opcional
    loadChildren: () =>
      import('./pages/user/user.module').then((m) => m.UserModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },

  {
    path: 'user',
    loadChildren: () =>
      import('./pages/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'user/:id', 
    loadChildren: () =>
      import('./pages/user/user.module').then((m) => m.UserModule),
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
