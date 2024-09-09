export interface User {
  id: string;
  fullName: string;
  email: string;
  role: string;
  enrolledCourses?: Course[]; // Opt
  createdExams?: Exam[];      // Opt
}
