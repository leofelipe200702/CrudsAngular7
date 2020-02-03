import { ListUsuariosComponent } from './list-usuarios/list-usuarios.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'welcome/:name', component: WelcomeComponent, canActivate: [RouteGuardService] },
  { path: 'home', component: HomeComponent,canActivate:[RouteGuardService]},
  { path: 'login', component: LoginComponent },
  { path: 'todos', component: ListTodosComponent, canActivate: [RouteGuardService] },
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService] },
  { path: 'todos/:id', component: TodoComponent, canActivate: [RouteGuardService] },
  { path: 'usuarios', component: ListUsuariosComponent,canActivate:[RouteGuardService] },
  { path: 'usuarios/:id', component: UsuarioComponent,canActivate:[RouteGuardService] },
  { path: 'signup/:id', component: UsuarioComponent},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
