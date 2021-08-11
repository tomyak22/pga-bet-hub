import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerTournamentProjection } from '../models/playerTournamentProjection';

@Injectable({
  providedIn: 'root'
})
export class BettingDataService {
  readonly BASE_URL: string = 'https://api.sportsdata.io/golf/v3/json/'
  readonly BASE_URL_V2: string = 'https://api.sportsdata.io/golf/v2/json/'
  apiKey = '?key=39def48faca647528e049c0005b7a305'

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * NNED TO PULL FROM OTHER LINK https://fantasydata.com/api/api-documentation/golf
   * @param tournamentId 
   * @returns 
   */
  public getTournamentProjectionsByTournament(tournamentId: number): Observable<PlayerTournamentProjection[]> {
    return this.http.get<PlayerTournamentProjection[]>(this.BASE_URL_V2 + 'PlayerTournamentProjectionStats/' + tournamentId + this.apiKey)
  }

  public getBettingMetaData() {

  }

  // 2021-10-02
  public getBettingEventsByDate(date: string) {

  }

  public getBettingEventsBySeason(season: number) {

  }

  public getBettingPlayerPropsByDate(date: number) {

  }

  public getBettingMarket(marketId: string) {

  }

  public getBettingMarketsByEvent(eventId: string) {

  }

  public getBettingMarketsByMarketType(eventId: string, marketTypeId: string) {

  }

  public getBettingMarketsByTournamentId(tournamentId: number) {

  }

  //SCRAMBLED
  public getActiveSportsBooks() {

  }

  public getInPlayTournamentOdds(tournamentId: number) {

  }

  public getInPlayTournamentOddsLineMovement(tournamentId: number) {

  }

  public getTournamentOdds(tournamentId: number) {

  }

  public getTournamentOddsLineMovement(tournamentId: number) {

  }
}
