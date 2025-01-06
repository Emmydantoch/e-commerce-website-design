const express = require("express")
const app = express()

app.get("/start backend", function(req, res){
    res.send("Hello Starter")
})

console.log("hello")

app.listen(3000, function(){
    console.log("server is running.")
})