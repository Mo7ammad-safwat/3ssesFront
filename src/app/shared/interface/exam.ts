import { Question } from './question';
export interface Exam {
  id: string;
  title: string;
  description: string;
  Courseid: number;
  Lessonid: number;
  Sectionid: number;

  questions: Question[];
}
