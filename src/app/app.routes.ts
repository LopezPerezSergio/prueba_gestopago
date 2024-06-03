import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Ejemplo de componente
import { RechargesComponent } from './recharges/recharges.component'; // Ejemplo de componente
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent, title: 'Inicio'
    }, // Ruta principal
    {
        path: 'recharges', component: RechargesComponent, title: 'Recargas'
    },
    {
        path: 'services', component: ServicesComponent, title: 'Servicios'
    },
];