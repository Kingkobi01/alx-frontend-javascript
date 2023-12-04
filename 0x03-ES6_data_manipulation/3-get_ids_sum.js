export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    return students.reduce((total, student) => (total + student.id), 0);
  }
  return 0;
}
