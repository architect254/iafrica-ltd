import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NavbarComponent } from '../../core/layout/navbar/navbar.component';

@Component({
  selector: 'iafrica-how-we-make-it-happen',
  standalone: true,
  imports: [MatCardModule, NavbarComponent],
  templateUrl: './how-we-make-it-happen.component.html',
  styleUrl: './how-we-make-it-happen.component.scss'
})
export class HowWeMakeItHappenComponent {

}
