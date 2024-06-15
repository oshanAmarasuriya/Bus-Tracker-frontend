import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VotingComponent } from './voting/voting.component';
import { MapViewComponent } from './map-view/map-view.component';
import { ScheduleAdderComponent } from './schedule-adder/schedule-adder.component';
import { RouteAdderComponent } from './route-adder/route-adder.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    // { path: 'voting', component: VotingComponent},
    { path: 'vote/:scheduleId/:routeInfo', component: VotingComponent },
    {path: 'add',component: ScheduleAdderComponent},
    {path: 'addRoute',component: RouteAdderComponent},
    { path: 'map', component: MapViewComponent}
];
