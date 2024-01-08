export default function getStudentIdsSum(listStudents) {
  return listStudents.reduce((prev, curr) => prev + curr.id, 0);
}
