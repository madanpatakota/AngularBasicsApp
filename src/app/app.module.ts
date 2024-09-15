import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { CustomerSignUpComponent } from './customer-signup/customer-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    TestCompComponent,
    CustomerSignUpComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
