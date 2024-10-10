import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {  MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [MatCardModule,MatRadioModule,CommonModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {

  questions = [
    { text: "What is the capital of France?", options: ["Paris", "Rome", "Berlin"], answer: "Paris" },
    { text: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" }
  ];
  
  submitAnswer(){

  }

}
