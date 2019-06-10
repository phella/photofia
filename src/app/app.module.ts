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
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EventsComponent } from './events/events.component';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { CreateEventComponent } from './create-event/create-event.component';
import { PlacesComponent } from './places/places.component';
import { PlaceDetailsComponent } from './place-details/place-details.component';
import { DatePipe } from '@angular/common';
import { GiftComponent } from './gift/gift.component';
import { DeviceComponent } from './device/device.component';
import { ProfileModule } from './profile/profile.module';
@NgModule({
  declarations: [
    AppComponent,
    SignComponent,
    HomeComponent,
    CreateComponent,
    EventsComponent,
    CreateEventComponent,
    PlacesComponent,
    PlaceDetailsComponent,
    GiftComponent,
    DeviceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ButtonsModule.forRoot(),
    HttpClientModule,
    ModalModule.forRoot(),
    TimepickerModule.forRoot(),
    ProfileModule
  ],
  providers: [
    AuthencationService,
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
