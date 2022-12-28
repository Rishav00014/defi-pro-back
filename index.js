import express from "express";
import mongoose from "mongoose";

const app = new express();

const port = 3000
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/api/details',(req,res)=>{
    res.send("its is ")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
