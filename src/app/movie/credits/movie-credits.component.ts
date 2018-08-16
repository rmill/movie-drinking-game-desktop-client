import { Component } from '@angular/core';

import { StatisticsService } from '../../shared/service/statistics.service';

@Component({
  selector: 'mdg-movie-credits',
  templateUrl: './movie-credits.component.html',
  styleUrls: ['./movie-credits.component.css']
})
export class MovieCreditsComponent {
  constructor(private statistics: StatisticsService) {}
}
