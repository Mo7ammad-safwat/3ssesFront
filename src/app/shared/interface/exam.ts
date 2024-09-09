export interface Exam {
  id: string;
  title: string;
  course: Course;
  questions?: Question[]; //Opt
  createdBy: User;
  duration: string;
}
