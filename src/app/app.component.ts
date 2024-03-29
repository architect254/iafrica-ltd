import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'iafrica-ltd';
  scrollAmount = 10;
  // Listens to the scroll of the website
@HostListener('window:wheel', ['$event'])
scroll_event($event: any) {
  $event.preventDefault();

  window.scrollTo(0, Math.E * 2 * this.scrollAmount);

  // Scrolls up or down
  if ($event.deltaY > 0) {
    this.scrollAmount++;
  } else {
    this.scrollAmount--;
  }
}
}
