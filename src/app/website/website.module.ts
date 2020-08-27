import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteComponent } from './website.component';
import { HomeComponent } from './components/home/home.component';
import { UsComponent } from './components/us/us.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [WebsiteComponent, HomeComponent, UsComponent, ContactComponent, NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class WebsiteModule { }
