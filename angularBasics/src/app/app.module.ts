import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './Container/container.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';
import { SearchComponent } from './search/search.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';

const appRoute:Routes =[
  {path:'Home',component:ContainerComponent},
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'About',component:AboutComponent},
  {path:'Contact',component:ContactComponent},
  {path:'**',component:ErrorComponent}//must be at last
]
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    HeaderComponent,
    NotificationComponent,
    SearchComponent,
    ProductsComponent,
    AboutComponent,
    ContactComponent,
    ErrorComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
