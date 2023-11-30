const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const accountSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9]+$/, // Ensures that the username contains only letters and numbers
  },
  password: String,
});

accountSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('Account', accountSchema);
