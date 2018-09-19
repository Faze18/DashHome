const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/dashBoard"
);

const postSeed = [
  {
      topic: "first",
      note: 'note'
  }
];

db.Posts
.collection.insertMany(postSeed)


