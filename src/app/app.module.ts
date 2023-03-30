import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsComponent } from './formularios/reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './formularios/template-driven-forms/template-driven-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsComponent,
    TemplateDrivenFormsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
