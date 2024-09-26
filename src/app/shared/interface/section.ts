import { Lesson } from './lesson';
export interface Section {
  id: string;
  title: string;
  pozshin: number;
  Courseid: number;
  lessons: Lesson[];
}
