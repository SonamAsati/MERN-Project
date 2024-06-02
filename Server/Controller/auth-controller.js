const { json } = require("express");

//Business logic
const homeRoute = async(req,res) =>{
    try{
        res.status(200).send({message:"Home page"});
    }catch(error){
        console.log("@@====>> Try again later")
    }
}
const registraionRoute = async(req,res) =>{
    try{
        console.log(req.body)
        res.status(200).json({ data : req.body});
    }catch(error){
        res.status(500).json("Interal server error");
    }
}
module.exports = {homeRoute,registraionRoute};