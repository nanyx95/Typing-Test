import { Component, OnInit } from '@angular/core';
import {InteractionService} from '../../services/interaction.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  correctWords: number;
  correctChars: number;
  accuracy: number;

  constructor(private interactionService: InteractionService) { }

  ngOnInit(): void {
    this.interactionService.getCorrectWords()
      .subscribe(words => this.correctWords = words);
    this.interactionService.getCorrectChars()
      .subscribe(chars => this.correctChars = chars);
    this.interactionService.getAccuracy()
      .subscribe(accuracy => this.accuracy = accuracy);
  }

}
