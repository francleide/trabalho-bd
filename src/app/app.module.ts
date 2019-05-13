import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PainelComponent } from './painel/painel.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PainelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
