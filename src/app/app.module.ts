import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyModule } from './my.module';
import { GridlistdynamicexampleComponent } from './gridlistdynamicexample/gridlistdynamicexample.component';

@NgModule({
  declarations: [
    AppComponent,
    GridlistdynamicexampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
