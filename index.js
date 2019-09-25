const initialize = () => fetch(`http://localhost:3000`)
    .then(response => response.json())
    .then(res => fillTableEmployees(res))
    .catch(error => console.log(error))

const fillTableEmployees = EmployeesList => {
    let rows = document.getElementById ("EmployeesRows")
    EmployeesList.forEach(employee => {
        rows.appendChild(createEmployeeRow(employee))
    });  
    EmployeesList || alert ("No hay empleados")
}

const createEmployeeRow = employee => {
    let row = createElem("div", "row") 
    let nameCol = createElem('div', "col-2")
    nameCol.innerText = employee.name
    row.appendChild(nameCol)
    let emailCol = createElem('div', "col-3")
    emailCol.innerText = employee.email
    row.appendChild(emailCol)
    let address = createElem('div', "col-3")
    address.innerText = employee.address
    row.appendChild(address)
    let phoneCol = createElem('div', "col-2")
    phoneCol.innerText = employee.phone
    row.appendChild(phoneCol)










    return row
}

const createElem = (elem, className) => {
    let name = document.createElement(elem)
    name.classList.add(className)
    return name
  }
