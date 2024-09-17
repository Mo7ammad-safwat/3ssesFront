// Sample Data for Course
const courses: Course[] = [
  {
    id: 'c1',
    title: 'Introduction to Mechanical Engineering',
    description:
      'A comprehensive overview of mechanical engineering principles.',
    Categoryid: 1,
    Userid: 101,
    sections: [
      { id: 's1', title: 'Basics', pozshin: 1, Courseid: 1, lessons: [] },
      {
        id: 's2',
        title: 'Advanced Topics',
        pozshin: 2,
        Courseid: 1,
        lessons: [],
      },
    ],
  },
  {
    id: 'c2',
    title: 'Feed Mill Technology',
    description:
      'Understanding the core components and processes in feed mill production.',
    Categoryid: 2,
    Userid: 102,
    sections: [],
  },
  {
    id: 'c3',
    title: 'Thermodynamics',
    description: 'Study of energy, heat, and their transformations.',
    Categoryid: 3,
    Userid: 103,
    sections: [],
  },
];

// Sample Data for AboutMe
const aboutMe: AboutMe = {
  id: 'a1',
  title: 'John Doe - Mechanical Engineer',
  contactMe: [
    { id: 'cm1', descriptionContactMe: 'john.doe@example.com' },
    { id: 'cm2', descriptionContactMe: '+1 555-1234' },
    { id: 'cm3', descriptionContactMe: 'LinkedIn: linkedin.com/in/johndoe' },
  ],
};

// Sample Data for Category
const categories: Category[] = [
  {
    id: 'cat1',
    title: 'Engineering',
    description: 'Courses related to engineering.',
    imageUrl: 'img/engineering.jpg',
  },
  {
    id: 'cat2',
    title: 'Agriculture',
    description: 'Courses about agricultural processes.',
    imageUrl: 'img/agriculture.jpg',
  },
  {
    id: 'cat3',
    title: 'Technology',
    description: 'Tech-focused educational material.',
    imageUrl: 'img/technology.jpg',
  },
];

// Sample Data for Section
const sections: Section[] = [
  { id: 's1', title: 'Introduction', pozshin: 1, Courseid: 1, lessons: [] },
  { id: 's2', title: 'Key Concepts', pozshin: 2, Courseid: 1, lessons: [] },
  { id: 's3', title: 'Final Project', pozshin: 3, Courseid: 2, lessons: [] },
];

// Sample Data for Lesson
const lessons: Lesson[] = [
  {
    id: 'l1',
    title: 'Introduction to Feed Mill',
    description: 'Basics of feed mill operation.',
    Sectionid: 1,
    videoUrl: 'videos/feedmill_intro.mp4',
    pdfurl: 'docs/feedmill_intro.pdf',
  },
  {
    id: 'l2',
    title: 'Grain Processing',
    description: 'Understanding the grain processing in feed mills.',
    Sectionid: 2,
    videoUrl: 'videos/grain_processing.mp4',
    pdfurl: 'docs/grain_processing.pdf',
  },
  {
    id: 'l3',
    title: 'Quality Control',
    description: 'Ensuring quality in feed production.',
    Sectionid: 3,
    videoUrl: 'videos/quality_control.mp4',
    pdfurl: 'docs/quality_control.pdf',
  },
];

// Sample Data for User
const users: User[] = [
  {
    id: 101,
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Instructor',
    profilePicture: 'profile/johndoe.jpg',
    dateJoined: new Date('2020-01-15'),
    enabled: true,
    courses: [],
    enrollments: [],
  },
  {
    id: 102,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'Student',
    profilePicture: 'profile/janesmith.jpg',
    dateJoined: new Date('2021-03-22'),
    enabled: true,
    courses: [],
    enrollments: [],
  },
  {
    id: 103,
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    role: 'Admin',
    profilePicture: 'profile/alexjohnson.jpg',
    dateJoined: new Date('2019-11-05'),
    enabled: true,
    courses: [],
    enrollments: [],
  },
];

// Sample Data for Enrollment
const enrollments: Enrollment[] = [
  {
    id: 'e1',
    Courseid: 1,
    Sectionid: 1,
    Lessonid: 1,
    studentId: 102,
    enrollmentDate: new Date('2021-04-10'),
    studentName: 'Jane Smith',
    Userid: 102,
    progress: 50,
    status: 'In Progress',
  },
  {
    id: 'e2',
    Courseid: 2,
    Sectionid: 2,
    Lessonid: 2,
    studentId: 103,
    enrollmentDate: new Date('2021-05-12'),
    studentName: 'Alex Johnson',
    Userid: 103,
    progress: 80,
    status: 'Completed',
  },
  {
    id: 'e3',
    Courseid: 3,
    Sectionid: 3,
    Lessonid: 3,
    studentId: 101,
    enrollmentDate: new Date('2021-06-15'),
    studentName: 'John Doe',
    Userid: 101,
    progress: 20,
    status: 'In Progress',
  },
];

// Sample Data for Exam
const exams: Exam[] = [
  {
    id: 'ex1',
    title: 'Mid-Term Exam',
    description: 'Exam covering the first half of the course.',
    Courseid: 1,
    Lessonid: 1,
    Sectionid: 1,
    questions: [],
  },
  {
    id: 'ex2',
    title: 'Final Exam',
    description: 'Comprehensive final exam.',
    Courseid: 2,
    Lessonid: 2,
    Sectionid: 2,
    questions: [],
  },
  {
    id: 'ex3',
    title: 'Project Evaluation',
    description: 'Grading the final project.',
    Courseid: 3,
    Lessonid: 3,
    Sectionid: 3,
    questions: [],
  },
];

// Sample Data for Question
const questions: Question[] = [
  {
    id: 'q1',
    title: 'What is feed mill technology?',
    description: 'Explain the fundamentals of feed mill technology.',
    Categoryid: 1,
    courseid: 1,
    Sectionid: 1,
    status: 'active',
    answers: [],
  },
  {
    id: 'q2',
    title: 'Describe the thermodynamic process.',
    description: 'Briefly describe the laws of thermodynamics.',
    Categoryid: 2,
    courseid: 2,
    Sectionid: 2,
    status: 'active',
    answers: [],
  },
  {
    id: 'q3',
    title: 'Explain quality control in feed production.',
    description:
      'Describe how quality is maintained in the production process.',
    Categoryid: 3,
    courseid: 3,
    Sectionid: 3,
    status: 'active',
    answers: [],
  },
];

// Sample Data for Answer
const answers: Answer[] = [
  { id: 'a1', title: 'Answer 1', Questionid: 1, isCorrect: true },
  { id: 'a2', title: 'Answer 2', Questionid: 2, isCorrect: false },
  { id: 'a3', title: 'Answer 3', Questionid: 3, isCorrect: true },
];
