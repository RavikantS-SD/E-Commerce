const express = require("express");
require("./db/conn");
const app = express();
const port = process.env.POST || 3000;

app.post("/students",(req,res) =>{
    res.send("Hello World !");
})

app.listen(port, () => {
    console.log(`Connection Setup ${port}`);
})