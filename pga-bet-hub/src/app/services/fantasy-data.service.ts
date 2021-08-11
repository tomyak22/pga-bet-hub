import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DfsSlate } from '../models/dfsSlate';
import { PlayerTournamentProjection } from '../models/playerTournamentProjection';

@Injectable({
  providedIn: 'root'
})
export class FantasyDataService {
  readonly BASE_URL: string = 'https://api.sportsdata.io/golf/v2/json/'
  readonly BASE_BET_URL: string = 'https://api.sportsdata.io/api/golf/json/'
  betApiKey = '?key=dc247d67874148e1908cd189f50d23c9'
  apiKey = '?key=39def48faca647528e049c0005b7a305'

  constructor(
    private http: HttpClient,
  ) { }

  public getDfsSlatesByTournament(tournamentId: number): Observable<DfsSlate> {
    return this.http.get<DfsSlate>(this.BASE_URL + 'DfsSlatesByTournament/' + tournamentId + this.apiKey)
  }

  public getPlayerProjectedStatsByTournamentId(tournamentId: number): Observable<PlayerTournamentProjection[]> {
    return this.http.get<PlayerTournamentProjection[]>(this.BASE_BET_URL + 'PlayerTournamentProjectionStats/' + tournamentId + this.betApiKey);
  }
}
