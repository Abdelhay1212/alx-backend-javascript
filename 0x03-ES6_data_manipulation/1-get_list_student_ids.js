export default function getListStudentIds(listStudents) {
  if (!Array.isArray(listStudents)) return [];

  const listStudentIds = listStudents.map((obj) => obj.id);

  return listStudentIds;
}
