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
    this.interactionService.getAccuracy()
      .subscribe(accuracy => this.accuracy = accuracy);
    this.interactionService.getTimerStatus()
      .subscribe(status => {
        if (status === TimerStatus.OFF) {
          this.showModal = true;
        }
      });
  }

  onOpenButtonClick(): void {
    this.showModal = true;
  }

  onCloseButtonClick(): void {
    this.showModal = false;
  }
}
