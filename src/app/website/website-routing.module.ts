import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebsiteComponent } from './website.component';
import { HomeComponent } from './components/home/home.component';
import { UsComponent } from './components/us/us.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path: '', 
    component: WebsiteComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'us', component: UsComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', redirectTo: '' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
