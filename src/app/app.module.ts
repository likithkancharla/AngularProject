import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { LoginComponent } from './login/login.component';
import { ClientmeetingsComponent } from './clientmeetings/clientmeetings.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes:Routes=[
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'create',component:CreateClientComponent},
  {path:'login',component:LoginComponent},
  {path:'clientmeeting',component:ClientmeetingsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    CreateClientComponent,
    LoginComponent,
    ClientmeetingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
