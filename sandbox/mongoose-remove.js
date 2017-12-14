const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '6a31738ff2ff95219841d6cc';
var userId = '6a2d284bab442b03482c7c1c';

// Todo.remove({}).then( (result) => {
//   console.log(result);
// });


//Todo.findOneAndRemove({})

//Todo.findByIdAndRemove()


Todo.findByIdAndRemove('5a322e28d3b9c261489535e3').then((todo) => {
  console.log("Removed:",todo);
});
