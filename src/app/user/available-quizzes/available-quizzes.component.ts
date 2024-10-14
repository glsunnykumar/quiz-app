import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-available-quizzes',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './available-quizzes.component.html',
  styleUrl: './available-quizzes.component.scss'
})
export class AvailableQuizzesComponent {

}
