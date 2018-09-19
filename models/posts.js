var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var Post = new Schema({
  // `body` is of type String
  topic: String,
  note: String
});

// This creates our model from the above schema, using mongoose's model method
var Post = mongoose.model("Post", Post);

// Export the Note model
module.exports = Post;