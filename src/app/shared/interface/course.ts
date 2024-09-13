import { Exam } from "./exam";
import { Lesson } from "./lesson";
import { User } from "./user";

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: User;
  lessons?: Lesson[];         // Opt
  enrolledStudents?: User[];  // Opt
  exams?: Exam[];             // Opt
}
