var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {  //Create model for Todo. Like what it should have. A blueprint
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});


module.exports = {
  Todo
};
