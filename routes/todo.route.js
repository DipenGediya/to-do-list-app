let express = require("express");
const { todoController } = require("../controllers");

let route = express.Router();

route.post("/create",todoController.post_todo);
route.get("/get",todoController.get_todoList);
route.delete("/delete/:id",todoController.delete_task);
route.put("/update/:id",todoController.update_taske);

module.exports = route