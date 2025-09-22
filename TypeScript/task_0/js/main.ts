interface Student {
  firstName: string
  lastName: string
  age: number
  location: string
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
}

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 21,
  location: "Los Angeles",
}

const studentsList: Student[] = [student1, student2]

const renderTable = (studentsList: Array<Student>): void => {
  const table = document.createElement("table")

  studentsList.forEach((student) => {
    const row = document.createElement("tr")
    const fNameRow = document.createElement("td")
    fNameRow.textContent = student.firstName
    const locationRow = document.createElement("td")
    locationRow.textContent = student.location
    row.appendChild(fNameRow)
    row.appendChild(locationRow)

    table.appendChild(row)
  })
  document.body.appendChild(table)
}

renderTable(studentsList)
