const express = require('express')
const app = express() 
const port = 3000

// app.get("/dash", (req, res) => {
//     res.send("<h1>Thank U O'Lord</h1>")
// })

app.get("/dashboard", (req, res) => {
    // res.send("Welcome to Node")
    res.send("<h1>Welcome to node class</h1>")
})

let studentRecord = [
    {id: 1, name: "John", age: 20, department: "Science"},
    {id: 2, name: "Jane", age: 22, department: "Arts"},
    {id: 3, name: "Doe", age: 21, department: "Commerce"},
    {id: 4, name: "Smith", age: 23, department: "Engineering"},
    {id: 5, name: "Emily", age: 19, department: "Mathematics"}
]

app.get("/dash", (req, res) => {
    res.send(studentRecord)
})

app.listen(port, () => {
    console.log("App is now working in port 30000");
    
})

// const express = require('express') 
// const Mywork = express()
// const LiveSe = 3000

// Mywork.listen(LiveSe, () => {
//     console.log("Am there now Yeah am now working");
    
// })