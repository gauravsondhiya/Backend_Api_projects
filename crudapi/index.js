const express = require("express");
const app = express();
app.listen(3000);
app.use(express.json());

let data = [];

app.post("/tasks", (req, res) => {
  
  let { title, desc } = req.body;
  let id = data.length + 1
  
  if (title === "" || desc === "") {
    res.json("put some values");
  } else {
    data.push({ id,title, desc });
    res.status(201).json(data);
  }
})
app.get("/tasks", (req, res) => {
    let status = req.query.status
      let fil = data.filter((value)=> {
        return value.status==status
      })
      res.status(200).json({fil})
})
app.get("/tasks/:id",(req,res)=>{
    let id = req.params.id
    let fil = data.filter((value)=> {
        return value.id==id
      })
      if(fil){
        res.json({fil})
      }else{
        res.status(404).json("Not Found")
      }
})

app.put("/tasks/:id",(req,res)=>{

})

app.delete("/tasks/:id",(req,res)=>{
    let id = req.params.id
    let fil = data.filter((value)=>{
      return value.id != id
    })
    data.push(fil)
    res.json(data)
})