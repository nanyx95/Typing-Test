import {Component, OnInit} from '@angular/core';
import {InteractionService} from '../../services/interaction.service';
import {TimerStatus} from '../../models/TimerStatus';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  showModal = false;
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
    this.interactionService.getTimerStatus()
      .subscribe(status => {
        if (status === TimerStatus.OFF) {
          this.showModal = true;
        }
      });
  }

  private accuracyCalc(totalWords: number): void {
    if (totalWords === 0) {
      this.accuracy = 0;
    } else {
      this.accuracy = Math.round((this.correctWords / totalWords) * 100);
    }
  }

  onOpenButtonClick(): void {
    this.showModal = true;
  }

  onCloseButtonClick(): void {
    this.showModal = false;
  }
}
