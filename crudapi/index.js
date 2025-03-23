const express = require('express')
const app = express()
let cors = require("cors")
let zod = require("zod")
app.use(express.json())
app.listen(3000)
app.use(cors())

app.get("/list",(req,res)=>{
    res.json("done")
})

app.post("/add",(req,res)=>{
    let name = req.body.name
    let mySchema = zod.string().max(3).min(2);
    let ans = mySchema.safeParse(name)
    res.send(ans)
})

app.put("/edit",(req,res)=>{

}) 

app.delete("/delete",(req,res)=>{
    res.send("done")
})

// app.use((err, req, res, next)=>{
//     // console.error(err.stack);
//     console.log(err)
//     res.status(500).json({ error: 'Internal Server Error' })
// })
