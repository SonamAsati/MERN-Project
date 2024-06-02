const express = require("express");
const router = express.Router();
//All application route
const authControllers  = require("../Controller/auth-controller")
router.get("/", authControllers.homeRoute)
//2nd way to define the route
router.route("/register").post(authControllers.registraionRoute);
module.exports = router;