import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
private http =inject(HttpClient);

  constructor() { }

  getQuestions() {
    return this.http.get('path/to/questions/api');
  }
}
