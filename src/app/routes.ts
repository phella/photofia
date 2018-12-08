import { SignComponent } from './sign/sign.component';
import { HomeComponent } from './home/home.component';
import {Routes} from '@angular/router';
import { AuthencationService } from './authencation.service';
import { CreateComponent } from '../app/create/create.component';
import {PProfileComponent} from '../app/p-profile/p-profile.component';
export const routes: Routes = [
{path: 'sign' , component : SignComponent},
{path: 'home' , component: HomeComponent, canActivate : [AuthencationService]},
{path: 'create', component: CreateComponent},
{path: 'profile', component: PProfileComponent}
];
