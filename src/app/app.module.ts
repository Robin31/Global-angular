import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChienDetailComponent } from './chien-detail/chien-detail.component';
import { ChienComponent } from './chien/chien.component';
import { FormsModule } from '@angular/forms';
import { ChienServices } from './services/chien.services';
import { AuthComponent } from './auth/auth.component';
import { ChienViewComponent } from './chien-view/chien-view.component';
import { AuthServices } from './services/auth.services';
import { ChienSoloComponent } from './chien-solo/chien-solo.component';
import { QuatrequatreComponent } from './quatrequatre/quatrequatre.component';
import { AuthGuard } from './services/auth-guard.services';

const appRoutes: Routes = [
  { path: 'chiens', canActivate: [AuthGuard], component: ChienViewComponent },
  { path: 'chiens/:id', canActivate: [AuthGuard], component: ChienSoloComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: ChienViewComponent },
  { path: 'not-found', component: QuatrequatreComponent },
  { path: '**', redirectTo: '/not-found' }
]
@NgModule({
  declarations: [
    AppComponent,
    ChienComponent,
    ChienDetailComponent,
    AuthComponent,
    ChienViewComponent,
    ChienSoloComponent,
    QuatrequatreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ChienServices, AuthServices, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
