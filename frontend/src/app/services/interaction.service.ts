import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {TimerStatus} from '../models/TimerStatus';

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

  constructor() {
    this.getTimerStatus()
      .subscribe(status => {
        if (status === TimerStatus.OFF) {
          this.saveTopWPMToLocalStorage();
        }
      });
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

}
