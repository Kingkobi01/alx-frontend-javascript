export default function updateStudentGradeByCity(students, location, grades) {
  if (Array.isArray(students)) {
    const locationStudents = students.filter((student) => student.location === location);
    return locationStudents.map((student) => {
      const studentGrade = grades.find((grade) => grade.studentId === student.id);
      if (studentGrade) {
        return {
          ...student,
          grade: studentGrade.grade,
        };
      }
      return {
        ...student,
        grade: 'N/A',
      };
    });
  }
  return [];
}
