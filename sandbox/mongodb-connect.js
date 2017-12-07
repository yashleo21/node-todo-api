// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connection successful");

  // db.collection('Todos').insertOne({
  //   text: 'Something',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log("Unable to insert todo");
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Vattghern',
  //   age: 24,
  //   location: 'Vizima'
  // }, (err, res) => {
  //   if(err) {
  //     return console.log('Unable to insert todo');
  //   }
  //
  //   console.log(JSON.stringify(res.ops[0]._id.getTimestamp()));
  // });

  db.close();
});
