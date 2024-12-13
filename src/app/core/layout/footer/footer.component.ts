import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'iafrica-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  navContent = [
    {
      title: `Public Relations`,
      path: `services/public-relations`,
    },{
      title: `Media Planning`,
      path: `services/media-planning`,
    },{
      title: `Advertising`,
      path: `services/advertising`,
    },{
      title: `Market Research`,
      path: `services/market-research`,
    },{
      title: `Event Management`,
      path: `services/public-relations`,
    },{
      title: `Experiential Marketing`,
      path: `services/experiential-marketing`,
    },
  ];
}
