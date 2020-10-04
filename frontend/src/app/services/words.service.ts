import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Word} from '../models/Word';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  springApi = 'api/v1';

  constructor(private http: HttpClient) { }

  getWord(): Observable<Word> {
    return this.http.get<Word>(`${this.springApi}/word`);
  }

  getWords(num: number): Observable<Word[]> {
    return this.http.get<Word[]>(`${this.springApi}/words/${num}`);
  }

}
