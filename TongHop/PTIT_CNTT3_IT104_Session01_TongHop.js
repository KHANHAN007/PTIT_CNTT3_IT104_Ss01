import {
  getStudentById,
  getTopStudents,
  getClassAverage,
  getStudentsByScoreRange,
  sortStudentsByName
} from './help-function.js';

class Student {
  constructor(id, name, age, scores) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.scores = scores;
  }

  getAverageScore() {
    return this.scores.reduce((a, b) => a + b, 0) / this.scores.length;
  }
}

const studentList = [
  new Student('S01', 'An', 18, [8, 9, 7]),
  new Student('S02', 'Binh', 19, [7, 6.5, 8]),
  new Student('S03', 'Chi', 20, [9, 9.5, 9]),
  new Student('S04', 'Duc', 18, [6, 7, 6.5]),
  new Student('S05', 'Hoa', 19, [8.5, 8.5, 9])
];

console.log("🔍 Tìm theo ID:", getStudentById(studentList, 'S03'));
console.log("🏆 Top sinh viên:", getTopStudents(studentList));
console.log("📊 Điểm TB lớp:", getClassAverage(studentList));
console.log("🔎 Trong khoảng 7 → 8.5:", getStudentsByScoreRange(studentList, 7, 8.5));
console.log("🔤 Sắp xếp theo tên:", sortStudentsByName(studentList));
