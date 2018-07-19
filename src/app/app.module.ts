import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClassesListComponent } from './classes-list/classes-list.component';
import { ClassNameService } from './classes-list/class-name.service';
import { HttpClientModule } from '@angular/common/http';
import { WordComponent } from './classes-list/word/word.component';


@NgModule({
  declarations: [
    AppComponent,
    ClassesListComponent,
    WordComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ClassNameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
