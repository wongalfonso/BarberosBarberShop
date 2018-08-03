import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.main';
import { Carousel } from './app.carousel';
import { AppInfo } from './app.info';

@NgModule({
  declarations: [
    AppComponent,
    Carousel,
    AppInfo
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
