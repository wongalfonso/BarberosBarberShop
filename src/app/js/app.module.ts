import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.main';
import { Carousel } from './app.carousel';
import { AppInfo } from './app.info';
import { Navbar } from './app.navbar';

@NgModule({
  declarations: [
    AppComponent,
    Carousel,
    AppInfo,
    Navbar
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
