const express = require("express")

const app = express()

app.listen(3000)

let count=0

// global middleware 
app.use((req,res,next)=>{
    count++
    next()
})

app.get("/",(req,res)=>{
    res.json(count)
})
app.put("/",(req,res)=>{
    res.json("done")
})
app.post("/",(req,res)=>{
    res.json("done")
})
app.delete("/",(req,res)=>{
    res.json("done")
})