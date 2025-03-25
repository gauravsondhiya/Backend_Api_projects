const express = require("express");
const app = express();
app.listen(3000);
app.use(express.json());

let data = [];

app.post("/tasks", (req, res) => {
  
  let { title, desc } = req.body;
  let id = data.length + 1
  if (title === "" || desc === "" || id==="") {
    res.json("put some values");
  } else {
    data.push({ id,title, desc ,status:"pending"});
    res.status(201).json(data);
  }
})
app.get("/tasks", (req, res) => {
    let status = req.query.status
    // console.log(status)
    if(status){
      let fil = data.filter((value)=> {
        return value.status=="done"
      })
      res.status(200).json({fil})
    }else{
      res.status(200).json(data)
    }
      
})
app.get("/tasks/:id",(req,res)=>{
    let id = req.params.id
    
    let fil = data.filter((value)=> {
        return value.id==id
      })
      
      if(fil.length==0){
        res.status(404).json("Not Found")
      }else{
        res.json(fil)
      }
})

app.put("/tasks/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let { title, desc, status } = req.body;
  let taskIndex = data.findIndex(task => task.id === id);
  console.log(taskIndex)
  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found!" });
  }

  if (title) data[taskIndex].title = title;
  if (desc) data[taskIndex].desc = desc;
  if (status) data[taskIndex].status = status;

  res.status(200).json(data[taskIndex]);
});

app.delete("/tasks/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let taskIndex = data.findIndex(task => task.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found!" });
  }

  data.splice(taskIndex, 1);
  res.status(204).send();
});