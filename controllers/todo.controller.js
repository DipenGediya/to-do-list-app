const { todoService } = require("../services");

let post_todo = async (req, res) => {
    try {
        let body = req.body;
        let duplicate = await todoService.findByTask(body.task);
        if (duplicate) {
            throw new Error("Task already Created")
        }
        let todo = await todoService.post_todo(body);
        // res.status(201).json({
        //     message: "task create success",
        //     todo
        // })
        res.redirect("/")
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

let get_todoList = async (req, res) => {
    try {
        let todo = await todoService.getAllList()
        res.status(200).json({
            message: "Get list of task success",
            todo
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

let delete_task = async (req, res) => {
    try {
        let { id } = req.params;
        let task = await todoService.findByIdAndDelete(id)
        res.status(200).json({
            message: "delete task success",
            task
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

let update_taske = async (req, res) => {
    try {
        let { id } = req.params;
        let body = req.body;
        let task = await todoService.findByIdAndUpdate(id, body)
        let newBody = {
            id,
            ...body
        }
        res.status(200).json({
            message: "task update successfully",
            newBody
        })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}
module.exports = { post_todo, get_todoList, delete_task ,update_taske}