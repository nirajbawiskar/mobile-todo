const asyncHandler = require("express-async-handler")
const Employee = require("../models/Employee")
const Todo = require("../models/Todo")

exports.createTodo = asyncHandler(async (req,res) => {
await Todo.create(req.body)
res.json({ message: "todo create success" })
})
exports.readTodo = asyncHandler(async (req,res) => {
    const result = await Todo.find().populate("employee", "name email")
    res.json({ message: "todo read success", result })
})
exports.updateTodo = asyncHandler(async (req,res) => {
    await Todo.findByIdAndUpdate(req.param.tid, req.body)
    res.json({ message: "todo update success" })
})
exports.deleteTodo = asyncHandler(async (req,res) => {
    await Todo.findByIdAndDelete(req.param.tid)
    res.json({ message: "todo delete success" })
})
exports.getAllemployee = asyncHandler(async (req,res) => {
    const result = await Employee.find()
    res.json({ message: "employee fetch success", result })
})