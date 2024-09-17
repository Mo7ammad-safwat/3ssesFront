export interface Query {
  user(id: string): User | null;
  users(page?: number, limit?: number): UserConnection;
  course(id: string): Course | null;
  courses(page?: number, limit?: number): CourseConnection;
  exam(id: string): Exam | null;
  exams(page?: number, limit?: number): ExamConnection;
  messages(limit?: number): Message[];
}
