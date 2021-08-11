import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerTournamentProjection } from '../models/playerTournamentProjection';

@Injectable({
  providedIn: 'root'
})
export class BettingDataService {
  readonly BASE_URL: string = 'https://api.sportsdata.io/golf/v3/json/'
  readonly BASE_URL_ODDS: string = 'https://api.sportsdata.io/v3/golf/odds/json/'
  readonly BASE_URL_V2: string = 'https://api.sportsdata.io/golf/v2/json/'
  readonly BASE_BET_URL: string = 'https://api.sportsdata.io/api/golf/json/'
  apiKey = '?key=39def48faca647528e049c0005b7a305'
  betApiKey = '?key=dc247d67874148e1908cd189f50d23c9'

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * @param tournamentId 
   * @returns 
   */
  public getTournamentProjectionsByTournament(tournamentId: number): Observable<PlayerTournamentProjection[]> {
    return this.http.get<PlayerTournamentProjection[]>(this.BASE_BET_URL + 'PlayerTournamentProjectionStats/' + tournamentId + this.betApiKey);
  }

  public getBettingMetaData(): Observable<any[]> {
    return this.http.get<any[]>(this.BASE_URL_ODDS + 'BettingMetadata' + this.apiKey);
  }

  // 2021-10-02
  public getBettingEventsByDate(date: string): Observable<any[]> {
    return this.http.get<any[]>(this.BASE_URL_ODDS + 'BettingEventsByDate/' + date + this.apiKey);
  }

  public getBettingEventsBySeason(season: number): Observable<any[]> {
    return this.http.get<any[]>(this.BASE_URL_ODDS + 'BettingEvents/' + season + this.apiKey);
  }

  public getBettingPlayerPropsByDate(date: number): Observable<any[]> {
    return this.http.get<any[]>(this.BASE_URL_ODDS + 'BettingPlayerPropsByDate/' + date + this.apiKey);
  }

  public getBettingMarket(marketId: string): Observable<any[]> {
    return this.http.get<any[]>(this.BASE_URL_ODDS + 'BettingMarket/' + marketId + this.apiKey);
  }

  public getBettingMarketsByEvent(eventId: string): Observable<any[]> {
    return this.http.get<any[]>(this.BASE_URL_ODDS + 'BettingMarkets/' + eventId + this.apiKey);
  }

  public getBettingMarketsByMarketType(eventId: string, marketTypeId: string): Observable<any[]> {
    return this.http.get<any[]>(this.BASE_URL_ODDS + 'BettingMarketsByMarketType/' + eventId + '/' + marketTypeId + this.apiKey);
  }

  public getBettingMarketsByTournamentId(tournamentId: number): Observable<any[]> {
    return this.http.get<any[]>(this.BASE_URL_ODDS + 'BettingMarketsByTournamentID/' + tournamentId + this.apiKey);
  }

  //SCRAMBLED
  public getActiveSportsBooks(): Observable<any[]> {
    return this.http.get<any[]>(this.BASE_URL_ODDS + 'ActiveSportsbooks' + this.apiKey);
  }

  public getInPlayTournamentOdds(tournamentId: number): Observable<any[]> {
    return this.http.get<any[]>(this.BASE_URL_ODDS + 'InPlayTournamentOdds/' + tournamentId + this.apiKey);
  }

  public getInPlayTournamentOddsLineMovement(tournamentId: number): Observable<any[]> {
    return this.http.get<any[]>(this.BASE_URL_ODDS + 'InPlayTournamentOddsLineMovement/' + tournamentId + this.apiKey);
  }

  public getTournamentOdds(tournamentId: number): Observable<any[]> {
    return this.http.get<any[]>(this.BASE_URL_ODDS + 'TournamentOdds/' + tournamentId + this.apiKey);
  }

  public getTournamentOddsLineMovement(tournamentId: number): Observable<any[]> {
    return this.http.get<any[]>(this.BASE_URL_ODDS + 'TournamentOddsLineMovement/' + tournamentId + this.apiKey);
  }
}
