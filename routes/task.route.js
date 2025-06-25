const express = require('express');
const { getTask, deleteTask, newTask, updateTask } = require('../controller/task.controller');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

const routes = express.Router();

routes.get('/',getTask);

routes.delete('/:id',deleteTask);

routes.post('/',upload.single('file'),newTask);

routes.put('/:id',updateTask);

module.exports = routes;


