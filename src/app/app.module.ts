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
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PProfileComponent } from './p-profile/p-profile.component';
import { PhotosComponent } from './photos/photos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { ReserveComponent } from './reserve/reserve.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EventsComponent } from './events/events.component';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { EditComponent } from './edit/edit.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { PlacesComponent } from './places/places.component';
import { PlaceDetailsComponent } from './place-details/place-details.component';
import { DatePipe } from '@angular/common';
import { RateComponent } from './rate/rate.component';
import { ReviewComponent } from './review/review.component';
import { GiftComponent } from './gift/gift.component';
import {CookieService } from 'angular2-cookie/services/cookies.service';
import { StatisticsComponent } from './statistics/statistics.component';
@NgModule({
  declarations: [
    AppComponent,
    SignComponent,
    HomeComponent,
    CreateComponent,
    PProfileComponent,
    PhotosComponent,
    ReserveComponent,
    EventsComponent,
    EditComponent,
    CreateEventComponent,
    PlacesComponent,
    PlaceDetailsComponent,
    RateComponent,
    ReviewComponent,
    GiftComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(routes),
    FormsModule,
    ButtonsModule.forRoot(),
    HttpClientModule,
    ModalModule.forRoot(),
    TimepickerModule.forRoot(),
  ],
  providers: [
    AuthencationService,
    DatePipe,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
