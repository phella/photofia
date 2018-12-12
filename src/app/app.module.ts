import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AuthencationService} from './authencation.service';
import { SignComponent } from './sign/sign.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { Form } from './services/Form.service';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PProfileComponent } from './p-profile/p-profile.component';
import { PhotosComponent } from './photos/photos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { ReserveComponent } from './reserve/reserve.component';
import { ModalModule } from 'ngx-bootstrap/modal';
@NgModule({
  declarations: [
    AppComponent,
    SignComponent,
    HomeComponent,
    CreateComponent,
    PProfileComponent,
    PhotosComponent,
    ReserveComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(routes),
    FormsModule,
    ButtonsModule.forRoot(),
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [
    AuthencationService,
    Form,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
