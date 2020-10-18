import {Component, HostListener, OnInit} from '@angular/core';
import {InteractionService} from '../../services/interaction.service';
import {KeyCode} from '../../models/KeyCode';

@Component({
  selector: 'app-restart-test',
  templateUrl: './restart-test.component.html',
  styleUrls: ['./restart-test.component.css']
})
export class RestartTestComponent implements OnInit {

  constructor(private interactionService: InteractionService) { }

  ngOnInit(): void {
  }

  @HostListener('window:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.code === KeyCode.ESCAPE) {
      this.interactionService.incrTestCounter();
    }
  }

  onRestartButtonClick(): void {
    this.interactionService.incrTestCounter();
  }
}
