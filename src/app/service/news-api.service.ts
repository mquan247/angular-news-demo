import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsApiService {
  constructor(private _http: HttpClient) {}
  // alterApiKey = 'cd7c12d0dca84fa38a6cf6e1f8898bcf';

  topNewsApiUrl =
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=e845231fb5d54a478050252ae4ecc9b1';

  techNewsApiUrl =
    'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=e845231fb5d54a478050252ae4ecc9b1 ';

  scienceNewsApiUrl =
    'https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=e845231fb5d54a478050252ae4ecc9b1 ';

  everyNewsUrl =
    'https://newsapi.org/v2/everything?q=&apiKey=e845231fb5d54a478050252ae4ecc9b1';

  topHeadlines(): Observable<any> {
    return this._http.get(this.topNewsApiUrl);
  }

  techNews(): Observable<any> {
    return this._http.get(this.techNewsApiUrl);
  }

  scienceNews(): Observable<any> {
    return this._http.get(this.scienceNewsApiUrl);
  }
}
