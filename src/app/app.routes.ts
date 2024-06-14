import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VotingComponent } from './voting/voting.component';
import { MapViewComponent } from './map-view/map-view.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'voting', component: VotingComponent},
    { path: 'map', component: MapViewComponent}
];
