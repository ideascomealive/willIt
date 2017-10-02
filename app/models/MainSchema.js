const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const MainSchema = new Schema({
  firstName: {
    type:String
  },
  lastName: {
    type:String
  },
  password:{
    type:String
  },
  email: {
    type:String
  },
  formData:{
    type:JSON
  }
});

// Remember, Mongoose will automatically save the ObjectIds of the users.
// These ids will be referred to later.

const User = module.exports = mongoose.model('User', MainSchema);

module.exports.createUser = function(newUser, callback){
  bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(newUser.password, salt, function(err, hash) {
          newUser.password = hash;
          newUser.save(callback);
      });
  });
}

module.exports.getUserByEmail = function(email, callback){
  var query = {email: email};
  User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
      if(err) throw err;
      callback(null, isMatch);
  });
}