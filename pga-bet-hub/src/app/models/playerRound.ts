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
import { PlayerHole } from './playerHole';


export interface PlayerRound { 
    playerRoundID?: number;
    playerTournamentID?: number;
    number?: number;
    day?: string;
    par?: number;
    score?: number;
    bogeyFree?: boolean;
    includesStreakOfThreeBirdiesOrBetter?: boolean;
    doubleEagles?: number;
    eagles?: number;
    birdies?: number;
    pars?: number;
    bogeys?: number;
    doubleBogeys?: number;
    worseThanDoubleBogey?: number;
    holeInOnes?: number;
    tripleBogeys?: number;
    worseThanTripleBogey?: number;
    holes?: Array<PlayerHole>;
    longestBirdieOrBetterStreak?: number;
    consecutiveBirdieOrBetterCount?: number;
    bounceBackCount?: number;
    includesStreakOfFourBirdiesOrBetter?: boolean;
    includesStreakOfFiveBirdiesOrBetter?: boolean;
    includesFiveOrMoreBirdiesOrBetter?: boolean;
    includesStreakOfSixBirdiesOrBetter?: boolean;
    teeTime?: string;
}