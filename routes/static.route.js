let express = require("express");
const { todoService } = require("../services");

let route = express();

route.get("/", async (req, res) => {
    let list = await todoService.getAllList()
    return res.render("index",{
        list
    })
})

module.exports = route