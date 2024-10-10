import { Routes } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { QuizComponent } from './user/quiz/quiz.component';
import { ResultComponent } from './user/result/result.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'quiz', component: QuizComponent },
    { path: 'result', component: ResultComponent }
];
