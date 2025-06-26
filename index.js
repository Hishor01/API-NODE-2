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
    {id: 1, name: "John", age: 20, department: "Science", img: src="https://www.google.com/imgres?q=john%20science&imgurl=https%3A%2F%2Ftmbw.net%2Fwiki%2Fimages%2F4%2F43%2FScientist-Johns.png&imgrefurl=https%3A%2F%2Ftmbw.net%2Fwiki%2FThe_Scientist_Johns&docid=TPcJg140j_OVsM&tbnid=SHl50FhJ3_O3EM&vet=12ahUKEwjFhPL84o6OAxWpUUEAHZK4NUwQM3oECGUQAA..i&w=799&h=749&hcb=2&ved=2ahUKEwjFhPL84o6OAxWpUUEAHZK4NUwQM3oECGUQAA"},
    {id: 2, name: "Jane", age: 22, department: "Arts",img: src="https://www.google.com/imgres?q=jane%20art&imgurl=https%3A%2F%2Fwww.fineprintart.com%2Fimages%2Frecycled-art-by-jane-perkins%2Fjane-perkins-1.jpg&imgrefurl=https%3A%2F%2Fwww.fineprintart.com%2Frecycled-art-by-jane-perkins%2F&docid=fU47jmQ6GAI7-M&tbnid=eM0x8dYpOeOn9M&vet=12ahUKEwijwsPi446OAxWLUkEAHWN4GnAQM3oECFcQAA..i&w=1000&h=1004&hcb=2&ved=2ahUKEwijwsPi446OAxWLUkEAHWN4GnAQM3oECFcQAA"},
    {id: 3, name: "Doe", age: 21, department: "Commerce", img: src="https://www.google.com/imgres?q=doe%20commerce&imgurl=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fdoe-commerce&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fdoe-commerce&docid=1b0c9f8d4f5a7c&tbnid=6kXQy1gYj4ZpCM&vet=12ahUKEwiJm5Xl446OAxWqUkEAHcV4GnAQM3oECFcQAA..i&w=1500&h=1000&hcb=2&ved=2ahUKEwiJm5Xl446OAxWqUkEAHcV4GnAQM3oECFcQAA"},
    {id: 4, name: "Smith", age: 23, department: "Engineering", img: src="https://www.google.com/imgres?q=smith%20engineering&imgurl=https%3A%2F%2Fwww.engineering.com%2Fmedia%2Fimages%2Fsmith-engineering.jpg&imgrefurl=https%3A%2F%2Fwww.engineering.com%2Fmedia%2Fimages%2Fsmith-engineering&docid=1b0c9f8d4f5a7c&tbnid=6kXQy1gYj4ZpCM&vet=12ahUKEwiJm5Xl446OAxWqUkEAHcV4GnAQM3oECFcQAA..i&w=1500&h=1000&hcb=2&ved=2ahUKEwiJm5Xl446OAxWqUkEAHcV4GnAQM3oECFcQAA"},
    {id: 5, name: "Emily", age: 19, department: "Mathematics", img: src="https://www.google.com/imgres?q=emily%20mathematics&imgurl=https%3A%2F%2Fwww.mathsisfun.com%2Fimages%2Femily-math.jpg&imgrefurl=https%3A%2F%2Fwww.mathsisfun.com%2Fimages%2Femily-math&docid=1b0c9f8d4f5a7c&tbnid=6kXQy1gYj4ZpCM&vet=12ahUKEwiJm5Xl446OAxWqUkEAHcV4GnAQM3oECFcQAA..i&w=1500&h=1000&hcb=2&ved=2ahUKEwiJm5Xl446OAxWqUkEAHcV4GnAQM3oECFcQAA"},
    {id: 6, name: "Michael", age: 24, department: "Physics", img: src="https://www.google.com/imgres?q=michael%20physics&imgurl=https%3A%2F%2Fwww.physics.org%2Fimages%2Fmichael-physics.jpg&imgrefurl=https%3A%2F%2Fwww.physics.org%2Fimages%2Fmichael-physics&docid=1b0c9f8d4f5a7c&tbnid=6kXQy1gYj4ZpCM&vet=12ahUKEwiJm5Xl446OAxWqUkEAHcV4GnAQM3oECFcQAA..i&w=1500&h=1000&hcb=2&ved=2ahUKEwiJm5Xl446OAxWqUkEAHcV4GnAQM3oECFcQAA"},
    {id: 7, name: "Sarah", age: 21, department: "Biology", img: src="https://www.google.com/imgres?q=sarah%20biology&imgurl=https%3A%2F%2Fwww.biology.org%2Fimages%2Fsarah-biology.jpg&imgrefurl=https%3A%2F%2Fwww.biology.org%2Fimages%2Fsarah-biology&docid=1b0c9f8d4f5a7c&tbnid=6kXQy1gYj4ZpCM&vet=12ahUKEwiJm5Xl446OAxWqUkEAHcV4GnAQM3oECFcQAA..i&w=1500&h=1000&hcb=2&ved=2ahUKEwiJm5Xl446OAxWqUkEAHcV4GnAQM3oECFcQAA"}
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