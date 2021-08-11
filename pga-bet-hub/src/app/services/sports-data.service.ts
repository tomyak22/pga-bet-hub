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
  readonly BASE_BET_URL: string = 'https://api.sportsdata.io/api/golf/json/'
  apiKey = '?key=39def48faca647528e049c0005b7a305'
  betApiKey = '?key=dc247d67874148e1908cd189f50d23c9'

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * Gets Player information based on player id
   * @param playerId 
   * @returns player information
   */
  public getPlayer(playerId: number): Observable<Player> {
    return this.http.get<Player>(this.BASE_URL + 'Player/' + playerId + this.apiKey);
  }

  /**
   * Gets all players available through the api
   * @returns all players information
   */
  public getAllPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.BASE_URL + 'Players' + this.apiKey);
  }

  /**
   * Gets All players stats for a given season
   * @param season (ex. 2021, 2020)
   * @returns 
   */
  public getAllPlayersSeasonStats(season: number): Observable<PlayerSeason[]> {
    return this.http.get<PlayerSeason[]>(this.BASE_URL + 'PlayerSeasonStats/' + season + this.apiKey);
  }

  /**
   * NEED TO PULL FROM OTHER LINK https://fantasydata.com/api/api-documentation/golf
   * Gets the current leaderboard for a specific tournament
   * @param tournamentId (use getScheduleBySeason(2021) for 2021's schedule with id's)
   * @returns the leaderboard from the tournament
   */
  public getLeaderboardByTournament(tournamentId: number): Observable<Leaderboard> {
    return this.http.get<Leaderboard>(this.BASE_BET_URL + 'Leaderboard/' + tournamentId + this.betApiKey);
  }
  
  /**
   * Gets a specific players stats by tournament
   * @param tournamentId (use getScheduleBySeason(2021) for 2021's schedule with id's)
   * @param playerId (use getAllPlayers() for full list of players with id's)
   * @returns 
   */
  public getTournamentStatsByPlayer(tournamentId: number, playerId: number): Observable<PlayerTournament> {
    return this.http.get<PlayerTournament>(this.BASE_URL + '/PlayerTournamentStatsByPlayer/' + tournamentId + '/' + playerId + this.apiKey);
  }

  /**
   * Gets the current PGA Tour season year
   * @returns the current season
   */
  public getCurrentSeasonYear(): Observable<Season> {
    return this.http.get<Season>(this.BASE_URL + 'CurrentSeason' + this.apiKey);
  }

  /**
   * Gets the events in order from the beginning of the api to end of the current season
   * @returns all tournaments from all years
   */
  public getSchedule(): Observable<Tournament[]> {
    return this.http.get<Tournament[]>(this.BASE_URL + 'Tournaments' + this.apiKey);
  }

  /**
   * Returns the tournaments in order from last to first for a given season
   * @param season (ex. 2021, 2020, 2019....)
   * @returns 
   */
  public getScheduleBySeason(season: number): Observable<Tournament[]> {
    return this.http.get<Tournament[]>(this.BASE_URL + 'Tournaments/' + season + this.apiKey);
  }
}
