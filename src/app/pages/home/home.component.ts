import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  cardContent = [
    {
      title: `Public Relations`,
      description: `We specialize in guiding your PR activities to help you achieve the necessary impact…`, imageUrl:`https://www.iafricaltd.com/images/pr%20buzz.jpg`,
      path: `services/public-relations`,
    },{
      title: `Media Planning`,
      description: `We begin the media planning cycle with a compilation of facts assembled from..`,imageUrl:`https://www.iafricaltd.com/images/Social-Media-Planning.jpg`,
      path: `services/media-planning`,
    },{
      title: `Advertising`,
      description: `Impact Africa delivers advertising that works. Because our creative strategies are based on…`,imageUrl:`https://www.iafricaltd.com/images/images%20(2).jpg`,
      path: `services/advertising`,
    },{
      title: `Market Research`,
      description: `Our marketing research objectives for the client is inherently aimed at continuous …..`,imageUrl:`https://www.iafricaltd.com/images/market_research.jpg`,
      path: `services/market-research`,
    },{
      title: `Event Management`,
      description: `We specialize in guiding your PR activities to help you achieve the necessary impact…`,imageUrl:`https://www.iafricaltd.com/images/images%20(2).jpg`,
      path: `services/public-relations`,
    },{
      title: `Experiential Marketing`,
      description: `We specialize in guiding your PR activities to help you achieve the necessary impact…`,imageUrl:`https://www.iafricaltd.com/images/pr%20buzz.jpg`,
      path: `services/experiential-marketing`,
    },
  ];
}
