import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RickandmortyService } from './rickandmorty.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
 
  imports: [
    BrowserModule,
    HttpClientModule 
  ],
  providers: [RickandmortyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
