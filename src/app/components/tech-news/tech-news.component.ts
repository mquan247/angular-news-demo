import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/service/news-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css'],
})
export class TechNewsComponent implements OnInit {
  techNewsData: any[] = [];
  totalNewsPage: number = 0;
  page: number = 1;
  searchNews: string = '';
  constructor(private api: NewsApiService, private router: Router) {}

  ngOnInit(): void {
    this.api.techNews().subscribe((result) => {
      this.techNewsData = result.articles.filter((objects: any) => {
        return objects.urlToImage !== null;
      });
      this.totalNewsPage = this.techNewsData.length;
      this.techNewsData.forEach((item, i) => {
        item.id = i + 1;
      });
      console.log(this.techNewsData);
    });
  }
}
