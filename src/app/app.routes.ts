import { Routes } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { QuizComponent } from './user/quiz/quiz.component';
import { ResultComponent } from './user/result/result.component';
import { ProgressComponent } from './user/progress/progress.component';
import { AvailableQuizzesComponent } from './user/available-quizzes/available-quizzes.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'quiz', component: QuizComponent },
    { path: 'result', component: ResultComponent },
    { path: 'progress', component: ProgressComponent }, // Previous Scores
    { path: 'available-quizzes', component: AvailableQuizzesComponent }, // Available Quizzes
    { path: '**', redirectTo: '' } // Redirect invalid paths to Home
];
