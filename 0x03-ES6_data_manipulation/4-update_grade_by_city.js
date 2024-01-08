export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  const filterdStudents = listStudents.filter((obj) => obj.location === city);

  const updatedStudents = filterdStudents.map((student) => {
    const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      'grade': matchingGrade ? matchingGrade.grade : 'N/A',
    };
  });

  return updatedStudents;
}
