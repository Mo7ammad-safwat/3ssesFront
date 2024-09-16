const users: User[] = [
  {
    id: 1,
    name: "Mrs. Johnson",
    email: "johnson@example.com",
    role: "Teacher",
    profilePicture: "https://example.com/profile1.jpg",
    dateJoined: new Date("2018-09-01"),
    enabled: true,
    courses: [],
    enrollments: []
  },
  {
    id: 2,
    name: "Emily Brown",
    email: "emily.brown@example.com",
    role: "Student",
    profilePicture: "https://example.com/profile2.jpg",
    dateJoined: new Date("2022-09-10"),
    enabled: true,
    courses: [],
    enrollments: []
  },
  {
    id: 3,
    name: "Michael Green",
    email: "michael.green@example.com",
    role: "Student",
    profilePicture: "https://example.com/profile3.jpg",
    dateJoined: new Date("2021-09-15"),
    enabled: true,
    courses: [],
    enrollments: []
  }
];

const courses: Course[] = [
  {
    id: "course1",
    title: "Mathematics 101",
    description: "Introduction to basic mathematical concepts including algebra and geometry.",
    Userid: 1,
    sections: []
  },
  {
    id: "course2",
    title: "Science 102",
    description: "Fundamentals of physics, chemistry, and biology.",
    Userid: 1,
    sections: []
  }
];

const sections: Section[] = [
  {
    id: "section1",
    title: "Algebra Basics",
    Courseid: 1,
    lessons: []
  },
  {
    id: "section2",
    title: "Geometry Fundamentals",
    Courseid: 1,
    lessons: []
  },
  {
    id: "section3",
    title: "Introduction to Physics",
    Courseid: 2,
    lessons: []
  }
];

const lessons: Lesson[] = [
  {
    id: "lesson1",
    title: "What is Algebra?",
    description: "Learn the basics of algebra and equations.",
    Sectionid: 1,
    videoUrl: "https://example.com/math1",
    pdfurl: "https://example.com/algebra1"
  },
  {
    id: "lesson2",
    title: "Basic Geometry",
    description: "Understand the basic shapes and their properties.",
    Sectionid: 2,
    videoUrl: "https://example.com/math2",
    pdfurl: "https://example.com/geometry1"
  },
  {
    id: "lesson3",
    title: "Newton's Laws of Motion",
    description: "Introduction to the three laws of motion.",
    Sectionid: 3,
    videoUrl: "https://example.com/physics1",
    pdfurl: "https://example.com/physics1"
  }
];

const enrollments: Enrollment[] = [
  {
    id: "enrollment1",
    Courseid: 1,
    Sectionid: 1,
    Lessonid: 1,
    studentId: 2,
    enrollmentDate: new Date("2022-09-15"),
    studentName: "Emily Brown",
    Userid: 1,
    progress: 80,
    status: "In Progress"
  },
  {
    id: "enrollment2",
    Courseid: 2,
    Sectionid: 3,
    Lessonid: 3,
    studentId: 3,
    enrollmentDate: new Date("2021-09-20"),
    studentName: "Michael Green",
    Userid: 1,
    progress: 60,
    status: "In Progress"
  }
];

const exams: Exam[] = [
  {
    id: "exam1",
    title: "Algebra Quiz",
    description: "Test your understanding of algebraic expressions.",
    Courseid: 1,
    Lessonid: 1,
    Sectionid: 1,
    questions: []
  },
  {
    id: "exam2",
    title: "Physics Basics",
    description: "Quiz on Newton's Laws of Motion.",
    Courseid: 2,
    Lessonid: 3,
    Sectionid: 3,
    questions: []
  }
];

const questions: Question[] = [
  {
    id: "question1",
    title: "What is a variable?",
    description: "Explain the concept of a variable in algebra.",
    Examid: 1,
    status: "Active",
    answers: []
  },
  {
    id: "question2",
    title: "What is the first law of motion?",
    description: "Explain Newton's first law of motion.",
    Examid: 2,
    status: "Active",
    answers: []
  }
];

const answers: Answer[] = [
  {
    id: "answer1",
    title: "A variable is a symbol for a number we don't know yet.",
    Questionid: 1,
    isCorrect: true
  },
  {
    id: "answer2",
    title: "The first law of motion is the law of inertia.",
    Questionid: 2,
    isCorrect: true
  }
];
