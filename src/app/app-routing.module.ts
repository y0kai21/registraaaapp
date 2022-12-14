import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './ingresado.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/home']);
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./paginas/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pagina-restablecer',
    loadChildren: () => import('./paginas/pagina-restablecer/pagina-restablecer.module').then( m => m.PaginaRestablecerPageModule)
  },
  {
    path: 'paginaprincipal',
    loadChildren: () => import('./paginas/paginaprincipal/paginaprincipal.module').then( m => m.PaginaprincipalPageModule),
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  {
    path: 'avisos',
    loadChildren: () => import('./paginas/avisos/avisos.module').then( m => m.AvisosPageModule),
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'lectorqr',
    loadChildren: () => import('./paginas/lectorqr/lectorqr.module').then( m => m.LectorqrPageModule),
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'miasistencia',
    loadChildren: () => import('./paginas/miasistencia/miasistencia.module').then( m => m.MiasistenciaPageModule),
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'registro',
    loadChildren: () => import('./paginas/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'horario',
    loadChildren: () => import('./paginas/horario/horario.module').then( m => m.HorarioPageModule),
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'ayuda',
    loadChildren: () => import('./paginas/ayuda/ayuda.module').then( m => m.AyudaPageModule),
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'ramos',
    loadChildren: () => import('./paginas/ramos/ramos.module').then( m => m.RamosPageModule),
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
