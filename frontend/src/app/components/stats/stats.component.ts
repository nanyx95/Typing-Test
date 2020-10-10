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
    this.interactionService.getTotalWords()
      .subscribe(totalWords => this.accuracyCalc(totalWords));
  }

  private accuracyCalc(totalWords: number): void {
    if (totalWords === 0) {
      this.accuracy = 0;
    } else {
      this.accuracy = Math.round((this.correctWords / totalWords) * 100);
    }
  }

}
