import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PProfileComponent } from '../p-profile/p-profile.component';
import { ReserveComponent } from '../reserve/reserve.component';
import { PhotosComponent } from '../photos/photos.component';
import { RouterModule } from '@angular/router';
import { routes } from '../routes';
import { ScheduleComponent } from '../schedule/schedule.component';
import { RateComponent } from '../rate/rate.component';
import { ReviewComponent } from '../review/review.component';
import { EditComponent } from '../edit/edit.component';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    BsDatepickerModule.forRoot(),
  ],
  declarations: [
    PProfileComponent,
    ReserveComponent,
    PhotosComponent,
    ScheduleComponent,
    RateComponent,
    ReviewComponent,
    EditComponent
  ]
})
export class ProfileModule { }
