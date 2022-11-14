const express = require("express")
// app.use(express.json())
const path = require('path')
const app = express()
//this will render the result - used instead of body-parser npm package
//body-parser has been depracated, can just use express
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"));

// dirname - a constant that will allow you to get a files path at any given location 
const htmlPath = path.join(__dirname, "index.html")

app.get("/",  (req,res) => {
    // Using dirname will give you the directory of the file, no matter where its located
    // This is suitable for when hosting websites online, for other people to access
    //this will render and display the html file
    res.sendFile(htmlPath)
})

// app.post("/", (req,res) => {
//     res.send(`The sum of ${req.body.num1} and ${req.body.num2} is ${String(Number(req.body.num1) + Number(req.body.num2))}`)
// })

app.post("/adding", (req,res) => {
    res.send(`The sum of ${req.body.num1} and ${req.body.num2} is ${String(Number(req.body.num1) + Number(req.body.num2))}`)
})

app.post("/subtracting", (req,res) => {
    res.send(`The result of ${req.body.num1} minus ${req.body.num2} is ${String(Number(req.body.num1) - Number(req.body.num2))}`)
})

app.post("/multiplying", (req,res) => {
    res.send(`The result of ${req.body.num1} multiply by ${req.body.num2} is ${String(Number(req.body.num1) * Number(req.body.num2))}`)
})

app.post("/dividing", (req,res) => {
    res.send(`The result of ${req.body.num1} divide by ${req.body.num2} is ${String((Number(req.body.num1) / Number(req.body.num2)).toFixed(3))}`)
})

app.listen(3000,  () => {
    console.log("Listening on port 3000")
})