const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  sroll: Number,
  sname: String,
  semail: String,
  scourse: String,
});

// Step 2: Create a Mongoose Model
const StudentModel = mongoose.model('Student', studentSchema);
module.exports = StudentModel;