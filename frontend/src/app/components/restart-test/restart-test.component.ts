import {Component, HostListener, OnInit, Output, EventEmitter} from '@angular/core';
import {InteractionService} from '../../services/interaction.service';
import {Key} from '../../models/Key';

@Component({
  selector: 'app-restart-test',
  templateUrl: './restart-test.component.html',
  styleUrls: ['./restart-test.component.css']
})
export class RestartTestComponent implements OnInit {

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
