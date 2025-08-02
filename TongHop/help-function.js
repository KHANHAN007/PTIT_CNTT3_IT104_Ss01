export const getStudentById = (studentList, id) => {
  return studentList.find(student => student.id === id);
};
export const getTopStudents = (studentList) => {
  let maxAvg = Math.max(...studentList.map(s => s.getAverageScore()));
  return studentList.filter(s => s.getAverageScore() === maxAvg);
};
export const getClassAverage = (studentList) => {
  const total = studentList.reduce((sum, s) => sum + s.getAverageScore(), 0);
  return total / studentList.length;
};
export const getStudentsByScoreRange = (studentList, min, max) => {
  return studentList.filter(s => {
    const avg = s.getAverageScore();
    return avg >= min && avg <= max;
  });
};
export const sortStudentsByName = (studentList) => {
  return [...studentList].sort((a, b) => a.name.localeCompare(b.name));
};