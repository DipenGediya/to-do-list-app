let mongoose = require("mongoose");

let todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    deadline: {
        type: String,
        required: true
    }

}
)

let todo = mongoose.model("todoSchema", todoSchema);

module.exports = todo