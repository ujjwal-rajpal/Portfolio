import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ArticlesComponent } from '../articles/articles.component';
import { ContactComponent } from '../contact/contact.component';
// if we donot add pathmath then it  would be difficult to redirect to defaupt path because every routes contain /''
const appRoutes: Routes=[
  { path: '', redirectTo: '/about', pathMatch: 'full'},
  { path: 'about', component: AboutComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'articles', component: ArticlesComponent},
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[ RouterModule ]
})
export class AppRouterModule { }
