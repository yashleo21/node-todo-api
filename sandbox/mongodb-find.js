// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connection successful");

  // db.collection('Todos').find({
  //   _id: new ObjectID('5a282dc9ed3cd11f14427617')}).toArray().then( (docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to retrieve data from Database');
  // });

  // db.collection('Todos').find().count().then( (count) => {
  //   console.log(`Todos count: ${count}`);
  //
  // }, (err) => {
  //   console.log('Unable to retrieve data from Database');
  // });

  db.collection('Users').find({
    name: 'Vesemir'}).toArray().then( (res) => {
      console.log('Users');
      console.log(JSON.stringify(res, undefined, 2));
    }, (err) => {
      console.log("Error");
    });


  // db.close();
  });
