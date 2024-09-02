let express = require("express");
let todoRoute = require("./todo.route")

let routes = express.Router();

routes.use("/todo",todoRoute)


module.exports = routes