import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './core/layout/layout.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HowWeMakeItHappenComponent } from './pages/how-we-make-it-happen/how-we-make-it-happen.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { ClientsComponent } from './pages/clients/clients.component';

export const routes: Routes = [
    {path: ``,component:LayoutComponent, children:[
        {path: `about-us`, component: AboutUsComponent},
        {path: `how-we-make-it-happen`, component: HowWeMakeItHappenComponent},
        {path: `partners`, component: PartnersComponent},
        {path: `contact-us`, component: HomeComponent},
        {path: `clients`, component: ClientsComponent},
        {path: `blog`, component: HomeComponent},
        {path: `services`, component: ServicesComponent},
        {path: ``, component: HomeComponent, pathMatch:`full`}
    ]}
];
