export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: User;
  lessons?: Lesson[];         // Opt
  enrolledStudents?: User[];  // Opt
  exams?: Exam[];             // Opt
}
