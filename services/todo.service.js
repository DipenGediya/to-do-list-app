const { todoSchema } = require("../models")

let post_todo = (body) => {
    return todoSchema.create(body)
}

let getAllList = () => {
    return todoSchema.find()
}

let findByIdAndDelete = (id) => {
    return todoSchema.findByIdAndDelete(id)
}

let findByTask = (task) => {
    return todoSchema.findOne({ task })
}

let findByIdAndUpdate = (id,body)=>{
return todoSchema.findByIdAndUpdate(id,body)
}
module.exports = { post_todo, getAllList, findByIdAndDelete, findByTask ,findByIdAndUpdate}