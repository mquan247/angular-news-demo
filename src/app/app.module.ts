import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNewsComponent } from './components/top-news/top-news.component';
import { NewsApiService } from './service/news-api.service';
import { ShortenPipe } from './pipes/shorten/shorten.pipe';
import { TechNewsComponent } from './components/tech-news/tech-news.component';
import { ScienceNewsComponent } from './components/science-news/science-news.component';
import { NewsListComponent } from './components/shared/news-list/news-list.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { NewsMessageComponent } from './components/shared/news-message/news-message.component';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNewsComponent,
    ShortenPipe,
    TechNewsComponent,
    ScienceNewsComponent,
    NewsListComponent,
    NewsMessageComponent,
    FilterPipe,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    FormsModule,
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
