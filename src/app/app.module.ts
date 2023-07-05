import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {ButtonModule} from "primeng/button";
import {MenubarModule} from "primeng/menubar";
import {DialogModule} from "primeng/dialog";
import{BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import { PresentationComponent } from './presentation/view/presentation/presentation.component';



@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //AppComponent,
    MatMenuModule,
    MatButtonModule,
    ButtonModule,
    MenubarModule,
    DialogModule,
    BrowserAnimationsModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
