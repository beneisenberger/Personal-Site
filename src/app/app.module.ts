import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MediaComponent } from './media/media.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { EventsComponent } from './events/events.component';
import { MenuComponent } from './menu/menu.component';
import { CodeComponent } from './code/code.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MediaComponent,
    ContactComponent,
    BlogComponent,
    EventsComponent,
    MenuComponent,
    CodeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
