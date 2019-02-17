import { SignComponent } from './sign/sign.component';
import { HomeComponent } from './home/home.component';
import {Routes} from '@angular/router';
import { AuthencationService } from './authencation.service';
import { CreateComponent } from '../app/create/create.component';
import {PProfileComponent} from '../app/p-profile/p-profile.component';
import { EventsComponent } from './events/events.component';
import { ReserveComponent } from './reserve/reserve.component';
import { PlacesComponent } from './places/places.component';
import { GiftComponent } from './gift/gift.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { DeviceComponent } from './device/device.component';
import { ProfileResolverService } from './profile-resolver.service';
export const routes: Routes = [
{path: 'sign' , component : SignComponent},
{path: 'home' , component: HomeComponent, canActivate : [AuthencationService]},
{path: 'create', component: CreateComponent},
{path: 'profile/:id', component: PProfileComponent, resolve: {privilege: ProfileResolverService}},
{path: 'events', component: EventsComponent},
{path: 'reserve', component: ReserveComponent},
{path: 'cities', component: PlacesComponent},
{path: 'gifts', component: GiftComponent},
{path: 'stats', component: StatisticsComponent},
{path: 'device', component: DeviceComponent},
{path: '', redirectTo: '/home', pathMatch: 'full'}
];
