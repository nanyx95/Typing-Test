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

  constructor() { }

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

}
