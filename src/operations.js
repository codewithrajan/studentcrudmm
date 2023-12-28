const StudentModel=require("./stumodel")

async function insertDocument(data)  {
  try {
    const newStudent = new StudentModel(data);

    const result = await newStudent.save();
    // console.log('Document inserted successfully:', result);
  } catch (error) {
    console.error('Error inserting document:', error);
  }
};

async function queryDocuments(data) {
  try {
    // console.log(data);
    const documents = await StudentModel.find(data);
    // console.log('Queried Documents:', documents);
    return documents;   
  } catch (error) {
    console.error('Error querying documents:', error);
  } finally {
    // mongoose.connection.close();
  }
  return "none";
}
async function delelteDocuments(data) {
  try {
    const documents = await StudentModel.deleteOne(data);
    console.log("delete successfully");
    // console.log('Queried Documents:', documents);
    // return documents;   
  } catch (error) {
    console.error('Error querying documents:', error);
  } finally {
    // mongoose.connection.close();
  } 
}

async function updateDocuments(sroll,updatedData) {
  try {
    const documents = await StudentModel.updateMany(sroll,updatedData);
    console.log("updated successfully");
    console.log('Queried Documents:', documents);
    // return documents;   
  } catch (error) {
    console.error('Error querying documents:', error);
  } finally {
    // mongoose.connection.close();
  } 
}

module.exports = { insertDocument ,queryDocuments,delelteDocuments,updateDocuments};

