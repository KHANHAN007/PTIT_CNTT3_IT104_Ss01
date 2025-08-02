class Student {
    constructor(id, name, age, scores) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.scores = scores;
    }
    getAverageScore() {
        const total = this.scores.reduce((sum, score) => sum + score, 0);
        return total / this.scores.length;
    }
}
const studentList = [
    new Student('S01', 'An', 18, [8, 9, 7]),
    new Student('S02', 'Binh', 19, [7, 6.5, 8]),
    new Student('S03', 'Chi', 20, [9, 9.5, 9]),
    new Student('S04', 'Duc', 18, [6, 7, 6.5]),
    new Student('S05', 'Hoa', 19, [8.5, 8.5, 9])
];
const getStudentById = (list, id) => {
    return list.find(student => student.id === id) || null;
}

const getTopStudents = (list) => {
    const maxAvg = Math.max(...list.map(s => s.getAverageScore()));
    return list.filter(s=>s.getAverageScore() === maxAvg);
}
const getClassAverage = (list) => {
  const totalAvg = list.reduce((sum, s) => sum + s.getAverageScore(), 0);
  return totalAvg / list.length;
};

const getStudentsByScoreRange = (list, min, max) => {
  return list.filter(s => {
    const avg = s.getAverageScore();
    return avg >= min && avg <= max;
  });
};

const sortStudentsByName = (list) => {
  return [...list].sort((a, b) => a.name.localeCompare(b.name));
};

console.log("🔍 Tìm sinh viên theo ID 'S03':", getStudentById(studentList, 'S03'));
console.log("🏆 Top sinh viên:", getTopStudents(studentList));
console.log("📊 Điểm TB lớp:", getClassAverage(studentList).toFixed(2));
console.log("📎 Sinh viên có điểm TB từ 7 đến 9:", getStudentsByScoreRange(studentList, 7, 9));
console.log("🔤 Danh sách sinh viên theo tên:", sortStudentsByName(studentList));
