const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connection successful");

  //deleteMany

  db.collection('Users').deleteMany({name: 'Vattghern'}).then( (res)=>{
    console.log(res);
  });

  //deleteOne
  // db.collection('Users').deleteOne({_id: new ObjectID('5a282ebd7504b728fc60fe5b')}).then( (res) => {
  //   console.log(res);
  // });

  //findOneAndDelete
    // db.collection('Users').findOneAndDelete({completed: false}).then( (result) => {
    //   console.log(result);
    // });

  // db.close();
  });
