import { KeywordComponent } from './keyword.component';
import { KeywordService } from './keyword.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UsernameService } from './username.service';
import { AppComponent } from './app.component';
import { UsernameComponent } from './username.component';
@NgModule({
  declarations: [
    AppComponent,
    UsernameComponent,
    KeywordComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UsernameService,KeywordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
