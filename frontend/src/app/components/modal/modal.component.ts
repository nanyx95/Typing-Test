import {Component, HostListener, OnInit} from '@angular/core';
import {InteractionService} from '../../services/interaction.service';
import {TimerStatus} from '../../models/TimerStatus';
import {Key} from '../../models/Key';

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

  @HostListener('window:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.code === Key.ESCAPE) {
      if (this.showModal === true) {
        this.showModal = false;
      }
    }
  }

  onOpenButtonClick(): void {
    this.showModal = true;
  }

  onCloseButtonClick(): void {
    this.interactionService.incrTestCounter();
    this.showModal = false;
  }
}
