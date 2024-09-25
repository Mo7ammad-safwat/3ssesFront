import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { ButtonModule } from 'primeng/button'; // Import ButtonModule

@Component({
  selector: 'app-exam1',
  standalone: true,
  imports: [CommonModule, ButtonModule], // Add ButtonModule to imports array
  templateUrl: './exam1.component.html',
  styleUrls: ['./exam1.component.scss']
})
export class Exam1Component implements OnInit, OnDestroy {
  questions = [
    {
      text: 'What is the speed of light in a vacuum?',
      options: ['3 x 10^8 m/s', '3 x 10^6 m/s', '3 x 10^5 m/s', '3 x 10^7 m/s'],
      correctAnswer: '3 x 10^8 m/s'
    },
    {
      text: 'Who is known as the father of modern physics?',
      options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Niels Bohr'],
      correctAnswer: 'Albert Einstein'
    },
    {
      text: 'What is the unit of electrical resistance?',
      options: ['Ohm', 'Volt', 'Ampere', 'Watt'],
      correctAnswer: 'Ohm'
    },
    {
      text: 'Which law states that for every action, there is an equal and opposite reaction?',
      options: ['Newton\'s First Law', 'Newton\'s Second Law', 'Newton\'s Third Law', 'Law of Gravitation'],
      correctAnswer: 'Newton\'s Third Law'
    },
    {
      text: 'What is the formula for calculating kinetic energy?',
      options: ['KE = mv^2', 'KE = 1/2 mv^2', 'KE = mgh', 'KE = 1/2 mv'],
      correctAnswer: 'KE = 1/2 mv^2'
    },
    {
      text: 'What is the SI unit of power?',
      options: ['Joule', 'Watt', 'Newton', 'Pascal'],
      correctAnswer: 'Watt'
    },
    {
      text: 'Which particle is negatively charged?',
      options: ['Proton', 'Neutron', 'Electron', 'Photon'],
      correctAnswer: 'Electron'
    },
    {
      text: 'What is the acceleration due to gravity on Earth?',
      options: ['9.8 m/s^2', '9.8 km/s^2', '9.8 cm/s^2', '9.8 mm/s^2'],
      correctAnswer: '9.8 m/s^2'
    },
    {
      text: 'What is the primary source of energy for the Earth?',
      options: ['The Moon', 'The Sun', 'The Stars', 'The Earth\'s Core'],
      correctAnswer: 'The Sun'
    },
    {
      text: 'What is the phenomenon of splitting of light into its constituent colors called?',
      options: ['Reflection', 'Refraction', 'Diffraction', 'Dispersion'],
      correctAnswer: 'Dispersion'
    }
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
