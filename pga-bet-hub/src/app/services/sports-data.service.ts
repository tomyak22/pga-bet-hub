import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SportsDataService {
  readonly BASE_URL: string = 'https://api.sportsdata.io/golf/v2/json/'

  constructor(
    private http: HttpClient,
  ) { }

  public getPlayer(playerId: number) {

  }

  public getAllPlayers() {

  }

  public getAllPlayersSeasonStats(season: number) {

  }

  public getAllTournaments() {

  }

  public getTournamentsBySeason(season: number) {

  }

  public getLeaderboardByTournament(tournamentId: number) {

  }
  
  public getTournamentStatsByPlayer(tournamentId: number, season: number) {

  }

  public getCurrentSeasonYear() {

  }

  public getSchedule() {

  }

  public getScheduleBySeason(season: number) {

  }
  
}
