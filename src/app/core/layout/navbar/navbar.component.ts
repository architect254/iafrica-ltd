import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'iafrica-navbar',
  standalone: true,
  imports: [RouterModule, MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  menuItems = [
    { id: 1, title: `Home`, path:`` },
    { id: 2, title: `About Us`, path:`about-us`  },
    { id: 3, title: `How We Make It Happen`, path:`how-we-make-it-happen`  },
    { id: 4, title: `Partners`, path:`partners`  },
    { id: 5, title: `Contact Us`, path:`contact-us`  },
    { id: 6, title: `Clients`, path:`clients`  },
    { id: 7, title: `Blog`, path:`blog`  },
    { id: 8, title: `Services`, path:`services`  },
  ];
}
