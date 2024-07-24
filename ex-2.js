function sortStudentsByScore(students) {
  let n = students.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (students[j].score < students[j + 1].score) {
        let name = students[j];
        students[j] = students[j + 1];
        students[j + 1] = name;
      }
    }
  }
  return students;
}
