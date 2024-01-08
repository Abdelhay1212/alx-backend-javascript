export default function getStudentsByLocation(listStudents, city) {
  return listStudents.filter((obj) => obj.location === city);
}
