const express = require("express");
const routes = express.Router();

const playerController = require ("./controler/playerController");


routes.get("/",(request, response)=> response.send("Hello World"));
routes.get("/players", playerController.index)

module.exports=routes;