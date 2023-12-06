interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}


const student1: Student = {
  firstName: 'Kwabena',
  lastName: 'Boakye',
  age: 6,
  location: 'Kumasi'
};

const student2: Student = {
  firstName: 'Kofi',
  lastName: 'Boahen',
  age: 3,
  location: 'Kumasi'
};

const studentList: Student[] = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');
table.appendChild(tbody);

for (const student of studentList) {
  const tr = document.createElement('tr');
  const tdfName = document.createElement('td');
  const tdLocation = document.createElement('td');

  tdfName.textContent = student.firstName;
  tdLocation.textContent = student.location;

  tr.append(tdfName, tdLocation)
  tbody.appendChild(tr);
}