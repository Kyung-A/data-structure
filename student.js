class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.tardies = 0;
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  markLate() {
    return (this.tardies += 1);
  }
  static EnrollStudents() {
    return "ENROLLING STUDENTS!";
  }
}

let firstStudent = new Student("Nam", "Eungyeong", 3);
let secondStudent = new Student("Oh", "Jisu");

console.log(Student.EnrollStudents());

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(45, 71);
const p2 = new Point(12, 5);

console.log(Point.distance(p1, p2));
