require("dotenv").config();
const express=require('express');
const jwt=require("jsonwebtoken");

const app=express();
app.use(express.json());

const USER = { username: "admin", password: "1234" };
const TASKS = [{ id: 1, title: "Learn Node.js" }];

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === USER.username && password === USER.password) {
    const token = jwt.sign({ username }, process.env.JWT_SECRET);
    return res.json({ token });
  }
  res.status(401).json({ message: "Invalid credentials" });
});

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.sendStatus(401);
  jwt.verify(token, process.env.JWT_SECRET, (err) => {
    if (err) return res.sendStatus(403);
    next();
  });
};

app.get("/tasks",auth,(req,res)=>{
    res.json(TASKS);
});

app.listen(3000,()=>console.log("Server is running"));