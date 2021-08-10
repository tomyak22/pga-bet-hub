import { Component, OnInit } from '@angular/core';
import { Player } from './models/player';
import { SportsDataService } from './services/sports-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pga-bet-hub';
  data;

  constructor(
    public sportsDataService: SportsDataService
    ) { }

  ngOnInit() {
    this.sportsDataService.getSchedule().subscribe(data => {
      this.data = data;
      console.log(this.data);
    })
    
  }
}
