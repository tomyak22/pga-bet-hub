import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BettingDataService {
  readonly BASE_URL: string = 'https://api.sportsdata.io/golf/v2/json/'

  constructor(
    private http: HttpClient,
  ) { }

  public getTournamentProjectionsByTournament(tournamentId: number) {

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
