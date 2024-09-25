import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { ButtonModule } from 'primeng/button'; // Import ButtonModule

@Component({
  selector: 'app-exam1',
  standalone: true,
  imports: [CommonModule, ButtonModule], // Add ButtonModule to imports array
  templateUrl: './exam4.component.html',
  styleUrls: ['./exam4.component.scss']
})
export class Exam4Component implements OnInit, OnDestroy {
  questions = [
    { text: 'What is the synonym of "happy"?', options: ['Sad', 'Joyful', 'Angry', 'Surprised'], correctAnswer: 'Joyful' },
    { text: 'What is the antonym of "big"?', options: ['Large', 'Huge', 'Small', 'Gigantic'], correctAnswer: 'Small' },
    { text: 'What is the plural form of "child"?', options: ['Childs', 'Children', 'Childes', 'Childrens'], correctAnswer: 'Children' },
    { text: 'What is the past tense of "go"?', options: ['Goes', 'Went', 'Gone', 'Going'], correctAnswer: 'Went' },
    { text: 'What is the synonym of "fast"?', options: ['Slow', 'Quick', 'Lazy', 'Late'], correctAnswer: 'Quick' },
    { text: 'What is the antonym of "hot"?', options: ['Warm', 'Cold', 'Cool', 'Freezing'], correctAnswer: 'Cold' },
    { text: 'What is the plural form of "mouse"?', options: ['Mouses', 'Mice', 'Mousies', 'Mouse'], correctAnswer: 'Mice' },
    { text: 'What is the past tense of "eat"?', options: ['Eats', 'Ate', 'Eaten', 'Eating'], correctAnswer: 'Ate' },
    { text: 'What is the synonym of "smart"?', options: ['Dumb', 'Intelligent', 'Stupid', 'Foolish'], correctAnswer: 'Intelligent' },
    { text: 'What is the antonym of "early"?', options: ['Late', 'Soon', 'Quick', 'Prompt'], correctAnswer: 'Late' }
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
