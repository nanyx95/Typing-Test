import {Component, HostListener, OnInit} from '@angular/core';
import {InteractionService} from '../../services/interaction.service';
import {Key} from '../../models/Key';
import {ITestResult} from '../../models/ITestResult';
import {DbService} from '../../services/db.service';
import {Ranking} from '../../models/Ranking';
import {TimerStatus} from '../../models/TimerStatus';
import {ModalActiveLayout} from '../../models/ModalActiveLayout';
import {forkJoin} from 'rxjs';
import {trigger, transition, style, animate} from '@angular/animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [
    trigger('animate', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('250ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 0 }),
      ]),
    ])
  ]
})
export class ModalComponent implements OnInit {

  showModal = false;
  activeLayout = ModalActiveLayout.NONE;
  testResult: ITestResult;
  ranking: Ranking;
  private topThreeRanking: Ranking[];
  userPosition: number;
  correctWords: number;
  usernameInputValue: string;
  rankingToDisplay: Ranking[];
  private correctChars: number;
  private accuracy: number;
  private topWPM: number;

  constructor(private interactionService: InteractionService, private dbService: DbService) { }

  ngOnInit(): void {
    // detect Android device
    if (/Android/i.test(navigator.userAgent)) {
      this.androidModalContent();
    }
    this.interactionService.getTimerStatus()
      .subscribe(status => {
        if (status === TimerStatus.OFF) {
          this.generateStats();
        }
      });
    this.interactionService.getCorrectWords()
      .subscribe(words => this.correctWords = words);
    this.interactionService.getCorrectChars()
      .subscribe(chars => this.correctChars = chars);
    this.interactionService.getAccuracy()
      .subscribe(accuracy => this.accuracy = accuracy);
    this.interactionService.getTopWPM()
      .subscribe(topWPM => this.topWPM = topWPM);
    // retrieve ranking from db
    this.retrieveAllInfoFromDb();
  }

  private androidModalContent(): void {
    this.testResult = {
      img: './assets/android.svg',
      imgAlt: 'android device',
      title: 'Sorry, Android is not supported :(',
      body: `Due to abnormal behavior of Android devices detecting keystrokes, Android is not currently supported.<br><br>More info <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=118639" target="_blank">here</a>.`,
      showBtnTryAgain: false
    };
    this.activeLayout = ModalActiveLayout.STATS;
    this.showModal = true;
  }

  @HostListener('window:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.code === Key.ESCAPE) {
      if (this.showModal === true) {
        this.showModal = false;
      }
    }
  }

  // only for testing
  onOpenButtonClick(): void {
    this.correctWords = 27;
    this.generateStats();
  }

  onTryAgainButtonClick(): void {
    this.interactionService.incrTestCounter();
    this.showModal = false;
  }

  onSaveScoreButtonClick(): void {
    const scoreToSave: Ranking = {
      id: localStorage.getItem('user-uuid'),
      user: this.usernameInputValue,
      wpm: this.correctWords,
      testDate: new Date().getTime()
    };
    this.dbService.saveRanking(scoreToSave).subscribe(res => {
      if (res) {
        this.goToRankingLayout();
      } else {
        document.getElementById('save-btn').classList.remove('disabled');
      }
    });
    document.getElementById('save-btn').classList.add('disabled');
  }

  goToStatsLayout(): void {
    this.activeLayout = ModalActiveLayout.STATS;
  }

  goToInputLayout(): void {
    this.activeLayout = ModalActiveLayout.INPUT;
  }

  goToRankingLayout(): void {
    this.retrieveAllInfoFromDb();
    this.activeLayout = ModalActiveLayout.RANKING;
    this.showModal = true;
  }

  private generateStats(): void {
    if (this.correctWords < 30) {
      this.testResult = {
        img: './assets/typewriter.svg',
        imgAlt: 'typewriter',
        title: 'Keep practicing!',
        body: `Well... You type with the speed of <span class="highlight">${this.correctWords} WPM</span> (${this.correctChars} CPM). Your accuracy was <span class="bold">${this.accuracy}%</span>. It could be better!`,
        showBtnTryAgain: true
      };
    } else {
      this.testResult = {
        img: './assets/rocket.svg',
        imgAlt: 'rocket',
        title: 'You\'re a Rocket!',
        body: `Nice! You type with the speed of <span class="highlight">${this.correctWords} WPM</span> (${this.correctChars} CPM). Your accuracy was <span class="bold">${this.accuracy}%</span>. Keep practicing!`,
        showBtnTryAgain: true
      };
    }
    this.activeLayout = ModalActiveLayout.STATS;
    this.showModal = true;
  }

  private generateRankingToDisplay(): void {
    this.rankingToDisplay = this.topThreeRanking;
    if (this.userPosition > 3) {
      this.rankingToDisplay.push(this.ranking);
    }
    this.rankingToDisplay = this.rankingToDisplay?.sort((obj1, obj2) => (obj1.wpm > obj2.wpm ? -1 : 1));
  }

  private retrieveAllInfoFromDb(): void {
    forkJoin([
      this.dbService.getRankingById(),
      this.dbService.getTopThree(),
      this.dbService.getPositionById()
    ]).subscribe(([ranking, topThree, pos]: [Ranking, Ranking[], number]) => {
      this.ranking = ranking;
      this.topThreeRanking = topThree;
      this.userPosition = pos;
      // set default username value
      this.usernameInputValue = this.ranking?.user;
      this.generateRankingToDisplay();
    }, err => console.log(err));
  }

}
