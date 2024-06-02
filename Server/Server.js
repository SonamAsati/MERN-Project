const express = require("express");
const app = express();
const router = require("./Router/auth-route")
//middleware
app.use(express.json())
app.use("/api/auth", router)
app.listen("3000", ()=>{
    console.log("Server is running");
});