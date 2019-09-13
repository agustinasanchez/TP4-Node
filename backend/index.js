var express = require ("express")
var app = express()
var bodyParser = require ("body-parser")

app.use (bodyParser.json())

var employees = []

app.get ("/", (req, res, next) => {
    res.json(employees);
   });

app.post ("/", (req, res, next) => {
    employees.push(req.body)
    res.json(employees);
 });

// if (data.hasOwnProperty("name") && data.hasOwnProperty("email")) {
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