var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //make mongoose use default Promise

mongoose.connect('mongodb://localhost:27017/TodoApp', {
  useMongoClient: true
});


module.exports = {
  mongoose
};
