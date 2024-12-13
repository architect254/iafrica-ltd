import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'iafrica-navbar',
  standalone: true,
  imports: [RouterModule, MatButtonModule,MatListModule,MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  menuItems = [
    { id: 1, title: `Home`, path:``, isActive: true, icon: `home` },
    { id: 2, title: `About Us`, path:`about-us`, isActive: false, icon: `info`   },
    { id: 3, title: `How We Make It Happen`, path:`how-we-make-it-happen`, isActive: false , icon: `handyman`   },
    { id: 4, title: `Partners`, path:`partners`, isActive: false, icon: `handshake`    },
    { id: 5, title: `Contact Us`, path:`contact-us`, isActive: false , icon: `phone_in_talk`   },
    { id: 6, title: `Clients`, path:`clients`, isActive: false , icon: `diversity_3`   },
    { id: 7, title: `Blog`, path:`blog`, isActive: false, icon: `rss_feed`    },
    { id: 8, title: `Services`, path:`services`, isActive: false, icon: `support_agent`    },
  ];

  navigate(menu:typeof this.menuItems[0]){
    for (let index = 0; index < this.menuItems.length; index++) {
      this.menuItems[index].isActive = false;
      if (this.menuItems[index].id == menu.id) {
        this.menuItems[index].isActive = true;
      }
      
    }
  }
}
