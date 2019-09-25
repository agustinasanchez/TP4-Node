var express = require ("express")
var app = express()
var bodyParser = require ("body-parser")
var cors = require ("cors")

app.use (bodyParser.json())
app.use (cors())

var employees = []

app.get ("/", (req, res, next) => {
    res.json(employees);
   });

app.post ("/", (req, res, next) => {
    let employee = req.body 
    employee.id = employees.length +1
    employees.push(employee)
    res.json(employee);
 });

app.put ("/:id", (req, res, next) => {
    let employee = employees.find (employee => {
        employee.id == req.params.id
    })
    console.log(req.params.id)
    employee.name = req.body.name
    employee.email = req.body.email
    employee.address = req.body.address
    employee.phone = req.body.phone
    res.json (employee) 
})





// if (res.json (employee)data.hasOwnProperty("name") && data.hasOwnProperty("email")) {
//     data.id = users.length + 1;
//     users.push(data);
//     res.send("recibido con el id ${data.id}");
// }
// else {
//     res.status("400").send("Error");
// } 
// next(); 
  
app.listen(3000, () => {
    console.log ("holis")
})

console.log("biri biri")