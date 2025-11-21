import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { AreasComponent } from './pages/areas/areas.component'; // IMPORTA TU NUEVO COMPONENTE
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
// import {ParticipantesComponent}from'./pages/participantes/participantes.component';
import { ParticipantesComponent } from './pages/participantes/participantes.component';

export const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "home", component: LayoutComponent }, // puedes cambiar LayoutComponent por HomeComponent si lo tienes creado
  { path: "forgot-password", component: ForgotPasswordComponent },
  { path: "reset-password/:token", component: ResetPasswordComponent },
  //{ path: "areas", component: AreasComponent }, // NUEVA RUTA PARA ÁREAS

  {
    path: "layout",
    component: LayoutComponent,
    children: [
      { path: "usuarios", component: UsuariosComponent },
      { path: "areas", component: AreasComponent },     // Áreas ahora dentro del Layout
      { path: "proyectos", component: ProyectosComponent },
      { path: "participantes", component: ParticipantesComponent }
    ]
  },
  { path: "**", redirectTo: "" } // redirección por defecto
];
