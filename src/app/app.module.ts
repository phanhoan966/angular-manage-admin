import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './admin/login/login.component';
import { PageNotFoundComponent } from './admin/page-not-found/page-not-found.component';
import { ForgotComponent } from './admin/forgot/forgot.component';
import { RegisterComponent } from './admin/register/register.component';
import { ResetComponent } from './admin/reset/reset.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    ForgotComponent,
    RegisterComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
