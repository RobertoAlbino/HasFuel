import { Routes } from '@angular/router';
import { MapsComponent } from './components/maps/maps.component';

export const rootRouterConfig: Routes = [
    { 
        path: '', 
        redirectTo: 'maps', 
        pathMatch: 'full' 
    },
    { 
        path: 'maps', 
        component: MapsComponent
    }
]

