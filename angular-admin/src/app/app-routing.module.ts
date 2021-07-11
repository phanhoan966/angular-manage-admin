import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './admin/forgot/forgot.component';
import { LoginComponent } from './admin/login/login.component';
import { PageNotFoundComponent } from './admin/page-not-found/page-not-found.component';
import { RegisterComponent } from './admin/register/register.component';
import { ResetComponent } from './admin/reset/reset.component';

const routes: Routes = [
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin/forgot', component: ForgotComponent },
  { path: 'admin/register', component: RegisterComponent },
  { path: 'admin/reset', component: ResetComponent },
  { path: '**', redirectTo: '/page-not-found' },
  { path: 'page-not-found', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
