import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { ButtonModule } from 'primeng/button'; // Import ButtonModule

@Component({
  selector: 'app-exam1',
  standalone: true,
  imports: [CommonModule, ButtonModule], // Add ButtonModule to imports array
  templateUrl: './exam2.component.html',
  styleUrls: ['./exam2.component.scss']
})
export class Exam2Component implements OnInit, OnDestroy {
  questions = [
    { text: 'What is the chemical symbol for water?', options: ['H2O', 'O2', 'CO2', 'H2'], correctAnswer: 'H2O' },
    { text: 'What is the pH level of pure water?', options: ['7', '1', '14', '0'], correctAnswer: '7' },
    { text: 'What is the atomic number of carbon?', options: ['6', '12', '14', '8'], correctAnswer: '6' },
    { text: 'What is the chemical formula for table salt?', options: ['NaCl', 'KCl', 'NaF', 'CaCl2'], correctAnswer: 'NaCl' },
    { text: 'What is the main gas found in the air we breathe?', options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'], correctAnswer: 'Nitrogen' },
    { text: 'What is the chemical symbol for gold?', options: ['Au', 'Ag', 'Pb', 'Fe'], correctAnswer: 'Au' },
    { text: 'What is the process of converting a liquid to a gas called?', options: ['Condensation', 'Evaporation', 'Sublimation', 'Deposition'], correctAnswer: 'Evaporation' },
    { text: 'What is the most abundant element in the universe?', options: ['Oxygen', 'Hydrogen', 'Carbon', 'Helium'], correctAnswer: 'Hydrogen' },
    { text: 'What is the chemical formula for methane?', options: ['CH4', 'C2H6', 'C3H8', 'C4H10'], correctAnswer: 'CH4' },
    { text: 'What is the chemical symbol for sodium?', options: ['Na', 'S', 'N', 'Si'], correctAnswer: 'Na' }
  ];


  answers: string[] = [];
  answerCorrectness: boolean[] = [];
  result: number | null = null;
  isSubmitted: boolean = false;
  timeLeft: number = 20; // 10 minutes in seconds
  timerInterval: any;

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    clearInterval(this.timerInterval);
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.updateCircle();
      } else {
        this.submitExam();
        clearInterval(this.timerInterval);
      }
    }, 1000);
  }

  selectAnswer(questionIndex: number, answer: string) {
    this.answers[questionIndex] = answer;
  }

  submitExam() {
    if (this.isSubmitted) return;
    this.result = this.questions.reduce((score, question, index) => {
      const isCorrect = this.answers[index] === question.correctAnswer;
      this.answerCorrectness[index] = isCorrect;
      return score + (isCorrect ? 1 : 0);
    }, 0);
    this.isSubmitted = true;
  }

  getFormattedTime() {
    const minutes = Math.floor(this.timeLeft / 60);
    const seconds = this.timeLeft % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  updateCircle() {
    const circleBar = document.querySelector('.circle .circle-bar') as HTMLElement;
    const circleMask = document.querySelector('.circle .circle-mask') as HTMLElement;
    const progress = (20 - this.timeLeft) / 20 * 360; // Adjust progress based on total time (360 for full circle)

    // Rotate the full circle element
    if (progress <= 180) {
      circleBar.style.transform = `rotate(${progress}deg)`;
      circleMask.style.transform = 'rotate(0deg)';
    } else {
      circleBar.style.transform = 'rotate(180deg)';
      circleMask.style.transform = `rotate(${progress - 180}deg)`;
    }
  }
}
