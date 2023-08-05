import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TestCompComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
