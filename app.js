const express = require("express");
const app = express();
const path = require("path");
const publicPath = path.resolve(__dirname, "./public");
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.listen(port, function(){
    console.log(`Servidor ejecutandose en el puerto  ${port}`);});

app.get("/",(req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.get("/login",(req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

app.get("/register",(req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
});