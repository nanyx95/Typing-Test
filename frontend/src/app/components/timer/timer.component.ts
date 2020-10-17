import {Component, OnInit} from '@angular/core';
import {InteractionService} from '../../services/interaction.service';
import {TimerStatus} from '../../models/TimerStatus';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  timerInterval = null;
  timeLeft = '60';

  constructor(private interactionService: InteractionService) { }

  ngOnInit(): void {
    this.interactionService.getTimerStatus()
      .subscribe(status => {
        if (status === TimerStatus.DEFAULT) {
          this.stopTimer();
          this.timeLeft = '60';
        }
        if (status === TimerStatus.ON) {
          this.startTimer();
        }
      });
  }

  private myTimer(d0: number): void {
    // get current time
    const d = (new Date()).valueOf();
    const startValue = 60000;
    const diff = startValue - (d - d0);
    const seconds: number = Math.floor(diff / 1000);

    this.timeLeft = seconds.toString();
    if (this.timeLeft.length === 1) {
      this.timeLeft = '0' + seconds;
    }
    if (seconds === 0) {
      this.stopTimer();
      this.interactionService.setTimerStatus(TimerStatus.OFF);
    }
  }

  startTimer(): void {
    // get current time
    const d0 = (new Date()).valueOf();

    if (this.timerInterval !== null) {
      clearInterval(this.timerInterval);
    }

    this.timerInterval = setInterval(() => {
      this.myTimer(d0);
    }, 100);
  }

  stopTimer(): void {
    clearInterval(this.timerInterval);
  }

}
