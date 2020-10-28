import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { SectionOfferComponent } from './sections/section-offer/section-offer.component';
import { SectionOfferTechComponent } from './sections/section-offer-tech/section-offer-tech.component';
import { SectionsComponent } from './sections/sections.component';
import { SectionOfferTeacherComponent } from './sections/section-offer-teacher/section-offer-teacher.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    SectionOfferComponent,
    SectionOfferTechComponent,
    SectionsComponent,
    SectionOfferTeacherComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
