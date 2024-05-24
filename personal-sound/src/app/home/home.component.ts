import { Component } from '@angular/core';
import { InitialSessionComponent } from './initial-session/initial-session.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InitialSessionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
