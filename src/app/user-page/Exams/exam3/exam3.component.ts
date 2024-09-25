import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { ButtonModule } from 'primeng/button'; // Import ButtonModule

@Component({
  selector: 'app-exam1',
  standalone: true,
  imports: [CommonModule, ButtonModule], // Add ButtonModule to imports array
  templateUrl: './exam3.component.html',
  styleUrls: ['./exam3.component.scss']
})
export class Exam3Component implements OnInit, OnDestroy {
  questions = [
    { text: 'ما هو جمع كلمة "كتاب"؟', options: ['كتب', 'كتابين', 'كتابة', 'كاتب'], correctAnswer: 'كتب' },
    { text: 'ما هو مرادف كلمة "سعيد"؟', options: ['حزين', 'فرحان', 'غاضب', 'مندهش'], correctAnswer: 'فرحان' },
    { text: 'ما هو ضد كلمة "كبير"؟', options: ['صغير', 'ضخم', 'عظيم', 'طويل'], correctAnswer: 'صغير' },
    { text: 'ما هو جمع كلمة "مدرسة"؟', options: ['مدارس', 'مدرسات', 'مدرس', 'مدرسي'], correctAnswer: 'مدارس' },
    { text: 'ما هو مرادف كلمة "جميل"؟', options: ['قبيح', 'وسيم', 'بشع', 'لطيف'], correctAnswer: 'وسيم' },
    { text: 'ما هو ضد كلمة "سريع"؟', options: ['بطيء', 'خفيف', 'ثقيل', 'سهل'], correctAnswer: 'بطيء' },
    { text: 'ما هو جمع كلمة "قلم"؟', options: ['أقلام', 'قلمين', 'قلام', 'قلمون'], correctAnswer: 'أقلام' },
    { text: 'ما هو مرادف كلمة "ذكي"؟', options: ['غبي', 'فطن', 'جاهل', 'بليد'], correctAnswer: 'فطن' },
    { text: 'ما هو ضد كلمة "طويل"؟', options: ['قصير', 'عريض', 'ضخم', 'رفيع'], correctAnswer: 'قصير' },
    { text: 'ما هو جمع كلمة "بيت"؟', options: ['بيوت', 'بيتين', 'بيات', 'بيوتات'], correctAnswer: 'بيوت' }
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
