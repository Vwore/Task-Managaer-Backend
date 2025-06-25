const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    Title: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    Status: {
        type: String,
        enum: ['DONE','TODO'],
        default: 'TODO'
    },
    LinkFile: {
        type: String
    },
    Deadline: {
        type: Date,
        required: true,

    }
},{
        timestamps: true
    });

module.exports= mongoose.model('Task',TaskSchema);