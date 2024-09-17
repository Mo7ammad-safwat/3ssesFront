export interface Mutation {
  addUser(fullName: string, email: string, password: string, role: string): User;
  addCourse(title: string, description: string, instructorId: string): Course;
  addExam(title: string, courseId: string, questions: QuestionInput[], createdById: string, duration: string): Exam;
  sendMessage(content: string, senderId: string): Message;
  register(fullName: string, email: string, password: string, role: string): AuthPayload;
  login(email: string, password: string): AuthPayload;
}
