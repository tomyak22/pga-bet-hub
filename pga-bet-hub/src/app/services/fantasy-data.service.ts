import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FantasyDataService {
  readonly BASE_URL: string = 'https://api.sportsdata.io/golf/v2/json/'

  constructor(
    private http: HttpClient,
  ) { }

  public getDfsSlatesByTournament(tournamentId: number) {

  }

  public getPlayerProjectedStatsByTournamentId(tournamentId: number) {

  }
}
