const mongoose = require('mongoose');

async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb+srv://rajan:fddGgOBLH8BCfLgJ@cluster0.d8girz9.mongodb.net/studentcrudmm?retryWrites=true&w=majority"
   );
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
// module.exports = { connectToDatabase };
connectToDatabase();