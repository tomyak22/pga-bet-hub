import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../models/player';
import { Observable } from 'rxjs';
import { PlayerSeason } from '../models/playerSeason';
import { Tournament } from '../models/tournament';
import { Leaderboard } from '../models/leaderboard';
import { PlayerTournament } from '../models/playerTournament';
import { Season } from '../models/season';

@Injectable({
  providedIn: 'root'
})
export class SportsDataService {
  readonly BASE_URL: string = 'https://api.sportsdata.io/golf/v2/json/'
  apiKey = '?key=39def48faca647528e049c0005b7a305'

  constructor(
    private http: HttpClient,
  ) { }

  public getPlayer(playerId: number): Observable<Player> {
    return this.http.get<Player>(this.BASE_URL + 'Player/' + playerId + this.apiKey);
  }

  public getAllPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.BASE_URL + 'Players' + this.apiKey);
  }

  public getAllPlayersSeasonStats(season: number): Observable<PlayerSeason[]> {
    return this.http.get<PlayerSeason[]>(this.BASE_URL + 'PlayerSeasonStats/' + season + this.apiKey);
  }

  public getLeaderboardByTournament(tournamentId: number): Observable<Leaderboard> {
    return this.http.get<Leaderboard>(this.BASE_URL + 'Leaderboard/' + tournamentId + this.apiKey);
  }
  
  public getTournamentStatsByPlayer(tournamentId: number, playerId: number): Observable<PlayerTournament> {
    return this.http.get<PlayerTournament>(this.BASE_URL + '/PlayerTournamentStatsByPlayer/' + tournamentId + '/' + playerId + this.apiKey);
  }

  public getCurrentSeasonYear(): Observable<Season> {
    return this.http.get<Season>(this.BASE_URL + 'CurrentSeason' + this.apiKey);
  }

  public getSchedule(): Observable<Tournament[]> {
    return this.http.get<Tournament[]>(this.BASE_URL + 'Tournaments' + this.apiKey);
  }

  public getScheduleBySeason(season: number) {

  }

}
