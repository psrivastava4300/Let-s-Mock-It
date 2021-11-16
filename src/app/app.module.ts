import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountDownComponent } from './count-down/count-down.component';
import { TestPageComponent } from './student/test-page/test-page.component';
import { ResultComponent } from './student/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CountDownComponent,
    TestPageComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
