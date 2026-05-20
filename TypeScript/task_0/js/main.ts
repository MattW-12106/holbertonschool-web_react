// Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2 students variables
const student1: Student = {
  firstName: "Alice",
  lastName: "In Chains",
  age: 78,
  location: "New York",
};
 
const student2: Student = {
  firstName: "Bobby",
  lastName: "Hill",
  age: 13,
  location: "Los Angeles",
};

// Storing made students in a list
const studentsList: Student[] = [student1, student2];

// Rendering a table for each element in the students list
const table: HTMLTableElement = document.createElement("table");
const tbody: HTMLTableSectionElement = document.createElement("tbody");

// Adding table elements for each student in the list
// Each row contains first name and location of a student
studentsList.forEach((student: Student): void => {
  const row: HTMLTableRowElement = document.createElement("tr");
 
  const firstNameCell: HTMLTableCellElement = document.createElement("td");
  firstNameCell.textContent = student.firstName;
 
  const locationCell: HTMLTableCellElement = document.createElement("td");
  locationCell.textContent = student.location;
 
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});
 
table.appendChild(tbody);
document.body.appendChild(table);
