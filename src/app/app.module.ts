import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Pg1Component } from './pages/pg1/pg1.component';
import { ShowNameComponent } from './components/show-name/show-name.component';
import { FormsModule } from '@angular/forms';

import { SafeDOMPipe } from './tarea15D/pipes/safe-dom.pipe';
import { EncryptPipe } from './tarea15D/pipes/encrypt.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Pg1Component,
    ShowNameComponent,

    SafeDOMPipe,
     EncryptPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue:'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
