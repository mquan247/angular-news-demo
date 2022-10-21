import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ScienceNewsComponent } from './components/science-news/science-news.component';
import { TechNewsComponent } from './components/tech-news/tech-news.component';
import { TopNewsComponent } from './components/top-news/top-news.component';

const routes: Routes = [
  { path: '', component: TopNewsComponent },
  { path: 'technology', component: TechNewsComponent },
  { path: 'science', component: ScienceNewsComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
