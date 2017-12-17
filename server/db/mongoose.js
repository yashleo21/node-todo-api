var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //make mongoose use default Promise

mongoose.connect(process.env.MONGODB_URI, {
  useMongoClient: true
});


module.exports = {
  mongoose
};
