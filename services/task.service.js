// getAllTask
// deleteTask
// edit title status and description
// addTask
const Task = require('../models/task.model');

class TaskService {
    getTask = async () =>
    {
    const allTask = await Task.find({});
    return allTask;
    };  
    deleteTask = async (id) => {
        const deleteTask = await Task.findByIdAndDelete(id)
        return deleteTask;
    };
    updateTask = async (id,body) => {
        const updatetdTask = await Task.findByIdAndUpdate(id,body,{new:true});
        return updatetdTask;
    }
    addTask = async (body,file) => {
        const newTask = await Task.create({...body,LinkFile: JSON.stringify(file)});
        return newTask;
    }
} 

module.exports = TaskService;