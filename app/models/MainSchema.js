const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MainSchema = new Schema({
  firstName: {
    type:String
  },
  lastName: {
    type:String
  },
  authToken: {
    type:String
  },
  formData:{
    type:JSON
  }
});

// Remember, Mongoose will automatically save the ObjectIds of the users.
// These ids will be referred to later.

const User = mongoose.model('User', MainSchema);

module.exports = User;
