import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/service/news-api.service';

@Component({
  selector: 'app-science-news',
  templateUrl: './science-news.component.html',
  styleUrls: ['./science-news.component.css'],
})
export class ScienceNewsComponent implements OnInit {
  scienceNewsData: any[] = [];
  totalNewsPage: number = 0;
  page: number = 1;
  searchNews: string = '';
  constructor(private api: NewsApiService) {}

  ngOnInit(): void {
    this.api.scienceNews().subscribe((result) => {
      this.scienceNewsData = result.articles.filter((objects: any) => {
        return objects.urlToImage !== null;
      });
      this.totalNewsPage = this.scienceNewsData.length;
      this.scienceNewsData.forEach((item, i) => {
        item.id = i + 1;
      });
      console.log(this.scienceNewsData);
    });
  }
}
