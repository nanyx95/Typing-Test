import {Component, HostListener, OnInit, Output, EventEmitter} from '@angular/core';
import {InteractionService} from '../../services/interaction.service';
import {Key} from '../../models/Key';

@Component({
  selector: 'app-cta-btn',
  templateUrl: './cta-btn.component.html',
  styleUrls: ['./cta-btn.component.css']
})
export class CtaBtnComponent implements OnInit {

  @Output() openRankingModalEvent = new EventEmitter();

  constructor(private interactionService: InteractionService) { }

  ngOnInit(): void {
  }

  @HostListener('window:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.code === Key.ESCAPE) {
      this.interactionService.incrTestCounter();
    }
  }

  onRestartButtonClick(): void {
    this.interactionService.incrTestCounter();
  }

  onRankingButtonClick(): void {
    this.openRankingModalEvent.emit();
  }

}
