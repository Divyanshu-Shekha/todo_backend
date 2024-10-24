import cors from 'cors'
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import dbConnect from "./db/dbConnect.js";
import { User } from "./modals/UserSchema.js";


const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
  res.send("Hello World");

});

app.get("/api/v1/get", async (req, res) => {
 const usersdata = await User.find();
 res.json(usersdata)
});

app.post("/api/v1/create", async (req, res) => {
  const usermodel =await User.create({
    topic : req.body.topic,
    tododata : req.body.todoData
  })
  res.json(usermodel);
});

app.delete("/api/v1/delete/:id", async (req, res) => {
  const deleteduser =await User.findByIdAndDelete(req.params.id)
  res.json(deleteduser);
});


app.get("/api/v1/selectedUser/:id", async (req, res) => {
  const selecteduser = await User.findById(req.params.id);
  res.json(selecteduser)
 });
 
app.put("/api/v1/update/:id", async (req, res) => {
  const updatedUser =await User.findByIdAndUpdate(req.params.id,{
    topic : req.body.topic,
    tododata : req.body.todoData
  })
  res.json(updatedUser);
});

dbConnect();
app.listen(process.env.PORT, () => {
  console.log(`The server is working on http://localhost:${process.env.PORT}`);
});
