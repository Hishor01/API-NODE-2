const express = require('express')
const app = express() 
const port = 3000
app.use(express.static('public'))

// app.get("/dash", (req, res) => {
//     res.send("<h1>Thank U O'Lord</h1>")
// })

app.get("/dashboard", (req, res) => {
    // res.send("Welcome to Node")
    res.send("<h1>Welcome to node class</h1>")
})

let studentRecord = [
    {id: 1, name: "John", age: 20, department: "Science", img: src="/public/Scientist-Johns.png"},
    {id: 2, name: "Jane", age: 22, department: "Arts",img: src="/public/images.jpg"},
    {id: 3, name: "Doe", age: 21, department: "Commerce", img: src="/public/download.jpg"},
    {id: 4, name: "Smith", age: 23, department: "Engineering", img: src="/public/Engineer-Smith.png"},
    {id: 5, name: "Emily", age: 19, department: "Mathematics", img: src="/public/Mathematician-Emily.png"},
    {id: 6, name: "Michael", age: 24, department: "Physics", img: src="/public/Physicist-Michael.png"},
    {id: 7, name: "Sarah", age: 21, department: "Biology", img: src="/public/download.png"}  
]

app.get("/", (req, res) => {
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