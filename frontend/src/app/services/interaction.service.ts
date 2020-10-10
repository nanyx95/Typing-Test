import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private timerStatus = new BehaviorSubject<boolean>(false);
  private correctWords = new BehaviorSubject<number>(0);
  private correctChars = new BehaviorSubject<number>(0);
  private totalWords = new BehaviorSubject<number>(0);

  constructor() { }

  setTimerStatus(status: boolean): void {
    this.timerStatus.next(status);
  }

  getTimerStatus(): Observable<boolean> {
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
