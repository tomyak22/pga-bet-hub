import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsImagesService {
  readonly BASE_URL: string = 'https://api.sportsdata.io/golf/v2/json/'
  apiKey = '?key=39def48faca647528e049c0005b7a305'


  constructor(
    private http: HttpClient,
  ) { }

  public getAllNews(): Observable<News[]> {
    return this.http.get<News[]>(this.BASE_URL + 'News' + this.apiKey);
  }

  public getNewsByDate(date: string): Observable<News[]> {
    return this.http.get<News[]>(this.BASE_URL + 'NewsByDate/' + date + this.apiKey);
  }

  public getNewsByPlayer(playerId: number) : Observable<News[]> {
    return this.http.get<News[]>(this.BASE_URL + 'NewsByPlayerID/' + playerId + this.apiKey);
  }

  public getPlayerHeadshots() {

  }
}
