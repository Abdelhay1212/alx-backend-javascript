interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 21,
  location: "Los Angeles",
};

const student2: Student = {
  firstName: "Abdelhay",
  lastName: "Et-taouaf",
  age: 23,
  location: "New York",
};

const studentsList: Student[] = [student1, student2];

document.addEventListener("DOMContentLoaded", () => {
  const table = document.createElement("table");

  const headerRow = table.insertRow(0);
  const headerCell1 = headerRow.insertCell(0);
  headerCell1.textContent = "First Name";
  const headerCell2 = headerRow.insertCell(1);
  headerCell2.textContent = "Location";

  studentsList.forEach((student, index) => {
    const row = table.insertRow(index + 1);
    const cell1 = row.insertCell(0);
    cell1.textContent = student.firstName;
    const cell2 = row.insertCell(1);
    cell2.textContent = student.location;
  });

  document.body.appendChild(table);
});
