import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {  MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [MatCardModule,MatRadioModule,CommonModule,FormsModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {
  questions = [
    {
      text: 'What is the capital of France?',
      options: ['Paris', 'London', 'Rome', 'Berlin'],
      correctAnswer: 'Paris'
    },
    {
      text: 'What is the capital of Italy?',
      options: ['Rome', 'Milan', 'Naples', 'Florence'],
      correctAnswer: 'Rome'
    },
    {
      text: 'What is the capital of Germany?',
      options: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg'],
      correctAnswer: 'Berlin'
    }
  ];
  
  currentQuestionIndex = 0;
  questionNumber = this.currentQuestionIndex + 1;
  selectedAnswer: string = '';
  answerChecked: boolean = false;

   // Get the current question based on the index
   get currentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

   // Move to the next question
   nextQuestion() {
    this.currentQuestionIndex++; // Increment the question index
    this.questionNumber++; 
    this.selectedAnswer = '';    // Reset the selected answer
    this.answerChecked = false;  // Reset the checked state
  }

  submitAnswer() {
    console.log('Selected Answer:', this.selectedAnswer);
  }

  checkAnswer() {
    this.answerChecked = true;
  }

}
