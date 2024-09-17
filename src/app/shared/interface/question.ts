import { Answer } from './answer';

export interface Question {
  id: string;
  title: string;
  description: string;
  Categoryid: number;
  courseid: number;
  Sectionid: number;
  status: string;
  answers: Answer[];
}
