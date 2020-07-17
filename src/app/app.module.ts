import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AboutComponent } from "./about/about.component";
import { MediaComponent } from "./media/media.component";
import { ContactComponent } from "./contact/contact.component";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule, BsDropdownModule } from "ngx-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MDBBootstrapModule } from "angular-bootstrap-md";

import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireStorageModule } from "angularfire2/storage";
import { AngularFireAuthModule } from "angularfire2/auth";

import { environment } from "../environments/environment";

import { EventsComponent } from "./events/events.component";
import { MenuComponent } from "./menu/menu.component";
import { FooterComponent } from "./menu/footer/footer.component";
import { CodeComponent } from "./code/code.component";
import { LoginComponent } from "./login/login.component";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { Routes, RouterModule } from "@angular/router";
import { MaterialModule } from "./material.module";

const routes: Routes = [
  { path: "", redirectTo: "/blog", pathMatch: "full" },
  { path: "", loadChildren: "./posts/posts.module#PostsModule" },
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MediaComponent,
    ContactComponent,
    EventsComponent,
    MenuComponent,
    FooterComponent,
    CodeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    MaterialModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    CoreModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    TooltipModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
