import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {TimerStatus} from '../models/TimerStatus';
import {ModalContent} from '../models/ModalContent';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private timerStatus = new BehaviorSubject<TimerStatus>(TimerStatus.DEFAULT);
  private correctWords = new BehaviorSubject<number>(0);
  private correctChars = new BehaviorSubject<number>(0);
  private totalWords = new BehaviorSubject<number>(0);
  private accuracy = new BehaviorSubject<number>(0);
  private topWPM = new BehaviorSubject<number>(0);
  private testCounter = new BehaviorSubject<number>(0);
  private modalContent = new BehaviorSubject<ModalContent>(null);

  constructor() {
    this.getTimerStatus()
      .subscribe(status => {
        if (status === TimerStatus.OFF) {
          this.generateModalContentWithStats();
          this.saveTopWPMToLocalStorage();
        }
      });
    // detect Android device
    if (/Android/i.test(navigator.userAgent)) {
      this.androidModalContent();
    }
    this.retrieveTopWPMFromLocalStorage();
  }

  setTimerStatus(status: TimerStatus): void {
    this.timerStatus.next(status);
  }

  getTimerStatus(): Observable<TimerStatus> {
    return this.timerStatus.asObservable();
  }

  setCorrectWords(words: number): void {
    this.correctWords.next(words);
  }

  getCorrectWords(): Observable<number> {
    return this.correctWords.asObservable();
  }

  setCorrectChars(chars: number): void {
    this.correctChars.next(chars);
  }

  getCorrectChars(): Observable<number> {
    return this.correctChars.asObservable();
  }

  setTotalWords(totalWords: number): void {
    this.totalWords.next(totalWords);
    this.setAccuracy(totalWords);
  }

  getTotalWords(): Observable<number> {
    return this.totalWords.asObservable();
  }

  setAccuracy(totalWords: number): void {
    if (totalWords === 0) {
      this.accuracy.next(0);
    } else {
      this.accuracy.next(Math.round((this.correctWords.getValue() / totalWords) * 100));
    }
  }

  getAccuracy(): Observable<number> {
    return this.accuracy.asObservable();
  }

  private retrieveTopWPMFromLocalStorage(): void {
    const wpm = Number(localStorage.getItem('top-wpm')) || 0;
    this.topWPM.next(wpm);
  }

  private saveTopWPMToLocalStorage(): void {
    const wpm = this.correctWords.getValue();
    if (wpm > this.topWPM.getValue()) {
      localStorage.setItem('top-wpm', String(wpm));
      this.setTopWPM(wpm);
    }
  }

  private setTopWPM(wpm: number): void {
    this.topWPM.next(wpm);
  }

  getTopWPM(): Observable<number> {
    return this.topWPM.asObservable();
  }

  incrTestCounter(): void {
    this.testCounter.next(this.testCounter.getValue() + 1);
  }

  getTestCounter(): Observable<number> {
    return this.testCounter.asObservable();
  }

  private generateModalContentWithStats(): void {
    const modalContent: ModalContent = new ModalContent();
    if (this.correctWords.getValue() < 30) {
      modalContent.img = './assets/rocket-1.svg';
      modalContent.imgAlt = 'rocket';
      modalContent.title = 'This was a static fire test, right?';
      modalContent.body = `Well... You type with the speed of <span class="highlight">${this.correctWords.getValue()} WPM</span> (${this.correctChars.getValue()} CPM). Your accuracy was <span class="bold">${this.accuracy.getValue()}%</span>. It could be better!`;
      modalContent.showButton = true;
    } else {
      modalContent.img = './assets/rocket-2.svg';
      modalContent.imgAlt = 'rocket';
      modalContent.title = 'You\'re a Rocket!';
      modalContent.body = `Nice! You type with the speed of <span class="highlight">${this.correctWords.getValue()} WPM</span> (${this.correctChars.getValue()} CPM). Your accuracy was <span class="bold">${this.accuracy.getValue()}%</span>. Keep practicing!`;
      modalContent.showButton = true;
    }
    this.modalContent.next(modalContent);
  }

  private androidModalContent(): void {
    const modalContent: ModalContent = new ModalContent();
    modalContent.img = './assets/android.svg';
    modalContent.imgAlt = 'android device';
    modalContent.title = 'Sorry, Android is not supported :(';
    modalContent.body = `Due to abnormal behavior of Android devices detecting keystrokes, Android is not currently supported.<br><br>More info <a href="https://bugs.chromium.org/p/chromium/issues/detail?id=118639" target="_blank">here</a>.`;
    modalContent.showButton = false;
    this.modalContent.next(modalContent);
  }

  getModalContent(): Observable<ModalContent> {
    return this.modalContent.asObservable();
  }

}
