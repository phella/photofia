import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AuthencationService} from './authencation.service';
import { SignComponent } from './sign/sign.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { FForm } from './services/Form.service';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PProfileComponent } from './p-profile/p-profile.component';
import { PhotosComponent } from './photos/photos.component';
@NgModule({
  declarations: [
    AppComponent,
    SignComponent,
    HomeComponent,
    CreateComponent,
    PProfileComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(routes),
    AngularFontAwesomeModule,
    FormsModule,
    ButtonsModule.forRoot()
  ],
  providers: [
    AuthencationService,
    FForm,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
