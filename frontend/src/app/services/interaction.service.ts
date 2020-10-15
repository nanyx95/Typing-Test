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
  }

  getTotalWords(): Observable<number> {
    return this.totalWords.asObservable();
  }

}
