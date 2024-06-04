import express from "express";
import {data} from "./data.js"

const app=express();
const port=3000;
app.use(express.static('public'))
 const date= new Date();

app.get("/",(req,res)=>{
    res.render("index.ejs",{
        projectDetails: data,
        date: date.getFullYear()
    })
})

app.listen(port,()=>{
    console.log(`Server started listening on port ${port}`);
})