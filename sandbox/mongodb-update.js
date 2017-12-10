const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connection successful");

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a29498051e016bcbe267cb5')
  // }, {
  //   $set: {
  //     completed: false
  //   }
  // }, {
  //   returnOriginal: false
  // }).then( (result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5a294612e647d92e50955428")
  }, {
    $set: {
      name: 'Sammy the Cat Witcher'
    },
    $inc: {
      age: 100
    }
  }, {
    returnOriginal:false
  }).then( (result) => {
    console.log(result);
  });

  });
