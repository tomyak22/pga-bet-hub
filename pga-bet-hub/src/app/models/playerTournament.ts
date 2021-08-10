/**
 * Golf v2
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { PlayerRound } from './playerRound';


export interface PlayerTournament { 
    playerTournamentID?: number;
    playerID?: number;
    tournamentID?: number;
    name?: string;
    rank?: number;
    country?: string;
    totalScore?: number;
    totalStrokes?: number;
    totalThrough?: number;
    earnings?: number;
    fedExPoints?: number;
    fantasyPoints?: number;
    fantasyPointsDraftKings?: number;
    draftKingsSalary?: number;
    doubleEagles?: number;
    eagles?: number;
    birdies?: number;
    pars?: number;
    bogeys?: number;
    doubleBogeys?: number;
    worseThanDoubleBogey?: number;
    holeInOnes?: number;
    streaksOfThreeBirdiesOrBetter?: number;
    bogeyFreeRounds?: number;
    roundsUnderSeventy?: number;
    tripleBogeys?: number;
    worseThanTripleBogey?: number;
    teeTime?: string;
    madeCut?: number;
    win?: number;
    tournamentStatus?: string;
    isAlternate?: boolean;
    fanDuelSalary?: number;
    fantasyDraftSalary?: number;
    madeCutDidNotFinish?: boolean;
    rounds?: Array<PlayerRound>;
    oddsToWin?: number;
    oddsToWinDescription?: string;
    fantasyPointsFanDuel?: number;
    fantasyPointsFantasyDraft?: number;
    streaksOfFourBirdiesOrBetter?: number;
    streaksOfFiveBirdiesOrBetter?: number;
    consecutiveBirdieOrBetterCount?: number;
    bounceBackCount?: number;
    roundsWithFiveOrMoreBirdiesOrBetter?: number;
    isWithdrawn?: boolean;
    fantasyPointsYahoo?: number;
    streaksOfSixBirdiesOrBetter?: number;
}
