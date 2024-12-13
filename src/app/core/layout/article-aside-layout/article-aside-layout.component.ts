import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'iafrica-article-aside-layout',
  standalone: true,
  imports: [MatListModule,RouterModule,MatIconModule],
  templateUrl: './article-aside-layout.component.html',
  styleUrl: './article-aside-layout.component.scss'
})
export class ArticleAsideLayoutComponent {
  menuItems = [
    { id: 1, title: `Home`, path:``, isActive: true, icon: `arrow_right` },
    { id: 2, title: `About Us`, path:`about-us`, isActive: false, icon: `arrow_right`   },
    { id: 3, title: `How We Make It Happen`, path:`how-we-make-it-happen`, isActive: false , icon: `arrow_right`   },
    { id: 4, title: `Partners`, path:`partners`, isActive: false, icon: `arrow_right`    },
    { id: 5, title: `Contact Us`, path:`contact-us`, isActive: false , icon: `arrow_right`   },
    { id: 6, title: `Clients`, path:`clients`, isActive: false , icon: `arrow_right`   },
    { id: 7, title: `Blog`, path:`blog`, isActive: false, icon: `arrow_right`    },
    { id: 8, title: `Services`, path:`services`, isActive: false, icon: `arrow_right`    },
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
