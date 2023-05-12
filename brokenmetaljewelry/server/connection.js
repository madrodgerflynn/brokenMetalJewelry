const mongoose = require('mongoose');
require('dotenv').config()
if(process.env.MONGODB_CONNECTION_STRING){
  console.log('> Connecting too process.env.MONGODB_CONNECTION_STRING')
} else {
  console.log('> Connecting to Local DB');
}
mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING  || 'mongodb://127.0.0.1:27017/truckr',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;