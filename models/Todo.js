const mongoose = require("mongoose")

const TodoSchema = new mongoose.Schema({
    employee: {type: mongoose.Types.ObjectId, ref: "employee", required:true },
    task:{type: String, required: true },
    desc:{type: String, required: true },
    priority:{type: String, required: true },
    isComplete:{type: Boolean, required: false }
}, { timestamps:true })

module.exports = mongoose.model("todo", TodoSchema)