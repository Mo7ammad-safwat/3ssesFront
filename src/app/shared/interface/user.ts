export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  profilePicture: string;
  dateJoined: Date;
  enabled: boolean;
  courses: Course[];
  enrollments: Enrollment[];
}
