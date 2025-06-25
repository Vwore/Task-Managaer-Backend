// newTask
// deleteTask
// updateTask
// getTask
const TaskService = require("../services/task.service");
const service = new TaskService();

const newTask = async (req, res) => {
    // console.log('newtask',req.body.title);
  const body = req.body;
  const file=req.file;

  try {
    const newTasks = await service.addTask(body,file);
    res.status(204).send(newTasks);
  } catch (e) {
    console.log(e)
    res.status(500).send();
  }
};

const deleteTask = async (req, res) => {
  const id = req.params.id;
  try {
    const taskRes = await service.deleteTask(id);
    res.status(200).send(taskRes);
  } catch (e) {
    res.status(500).send();
  }
};

const updateTask = async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  try {
    const taskRes = await service.updateTask(id, body);
    res.status(204).send(taskRes);
  } catch (e) {
    res.status(500).send();
  }
};

const getTask = async (req, res) => {
  try {
    const taskRes = await service.getTask();
    res.status(200).send(taskRes);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};

module.exports = {
  getTask,
  updateTask,
  deleteTask,
  newTask,
};
