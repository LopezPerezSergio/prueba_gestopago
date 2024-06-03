import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { RechargesComponent } from './recharges/recharges.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    HomeComponent,
    RechargesComponent,
    ServicesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba_gestopago';
}

