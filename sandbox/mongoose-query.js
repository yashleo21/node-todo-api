const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '6a31738ff2ff95219841d6cc';
var userId = '6a2d284bab442b03482c7c1c';
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then( (todos) => {
//   console.log('Todos',todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then( (todo) => {
//   console.log('Todo',todo);
// });
//
// Todo.findById(id).then( (todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by id',todo);
// }).catch((e) => console.log(e));

User.findById(userId).then ( (user) => {
  if(!user){
    return console.log('Id for user not found');
  }
  console.log('User by id',user);
}).catch( (e) => console.log(e));
