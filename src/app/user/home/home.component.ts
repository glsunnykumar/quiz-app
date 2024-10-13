import { Component, OnInit } from '@angular/core';
import { QuestionComponent } from '../question/question.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [QuestionComponent,MatCardModule,MatProgressBarModule,TitleCasePipe,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  student = {
    name: 'John Doe',
    quizzes: [
      { quizId: 'quiz1', score: 80, totalQuestions: 10, correctAnswers: 8 },
      { quizId: 'quiz2', score: 90, totalQuestions: 10, correctAnswers: 9 }
    ]
  };
  overallProgress: number = 0;

  ngOnInit() {
    this.calculateProgress();
  }

  calculateProgress() {
    const totalQuizzes = this.student.quizzes.length;
    const totalScore = this.student.quizzes.reduce((acc, quiz) => acc + quiz.score, 0);
    this.overallProgress = totalQuizzes ? (totalScore / totalQuizzes) : 0;
  }

  startNewQuiz() {
    // Navigate to quiz component
  }

}
