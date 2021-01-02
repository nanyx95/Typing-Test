import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import {Ranking} from '../models/Ranking';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private rankingApi = 'api/v1/ranking';
  private userUUID: string;

  constructor(private http: HttpClient) {
    // generate and save user id
    this.userUUID = uuidv4();
    if (localStorage.getItem('user-uuid') === null) {
      localStorage.setItem('user-uuid', this.userUUID);
    } else {
      this.userUUID = localStorage.getItem('user-uuid');
    }
  }

  getRankingById(): Observable<Ranking> {
    return this.http.get<Ranking>(`${this.rankingApi}/info/${this.userUUID}`);
  }

  saveRanking(ranking: Ranking): Observable<Ranking> {
    return this.http.post<Ranking>(`${this.rankingApi}/save`, ranking);
  }

  getTopThree(): Observable<Ranking[]> {
    return this.http.get<Ranking[]>(`${this.rankingApi}/top`);
  }

  getPositionById(): Observable<number> {
    return this.http.get<number>(`${this.rankingApi}/pos/${this.userUUID}`);
  }

}
