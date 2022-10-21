import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/service/news-api.service';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css'],
})
export class TopNewsComponent implements OnInit {
  topHeadlinesData: any[] = [];
  totalNewsPage: number = 0;
  page: number = 1;
  searchNews: string = '';
  constructor(private api: NewsApiService) {}

  ngOnInit(): void {
    this.api.topHeadlines().subscribe((result) => {
      this.topHeadlinesData = result.articles.filter((objects: any) => {
        return objects.urlToImage !== null;
      });
      this.totalNewsPage = this.topHeadlinesData.length;
      this.topHeadlinesData.forEach((item, i) => {
        item.id = i + 1;
      });
      console.log(this.topHeadlinesData);
    });
    
  }
}
