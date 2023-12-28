// const exp = require('constants');
const express = require('express');
const hbs = require("hbs");
const path = require("path");
const app = express();
const bodyparser = require("body-parser");
const {insertDocument,queryDocuments,delelteDocuments,updateDocuments}=require("./operations");
const {connectToDatabase}=require("./db");
const templatepath = path.join(__dirname, "../template");  //to change views to template
const partialpath = path.join(__dirname, "../template/assets");  //for the partial files
const staticpath = path.join(__dirname, '../public');  //for the bootstrap
connectToDatabase();
app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(partialpath);
// Set up static file serving for Bootstrap and other files

app.use(express.static(staticpath));

app.use(bodyparser.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
    const doc=await queryDocuments();
    // console.log(doc);
    res.render("index",{'students':doc});
});
app.get("/index", async (req, res) => {
    // connectToDatabase();
    const doc=await queryDocuments();
    // console.log(doc);
    res.render("index",{'students':doc});
});

app.post('/submit', async (req, res) => {
    const d = req.body;
    // connectToDatabase();
   // Query and insert operations
   const data={
    sroll: d.sroll,
    sname: d.sname,
    semail: d.semail,
    scourse: d.scourse
  };
    await insertDocument(data);
    res.redirect("/index");
    
});

app.post("/updatesubmit",async (req,res)=>{
    const sroll={sroll:parseInt(req.body.sroll)};
    const updatedData = {
        sname: req.body.sname,
        semail: req.body.semail,
        scourse: req.body.scourse
        // Add other fields as needed
    };
   const data=await updateDocuments(sroll,updatedData);
//    console.log(data);
   res.redirect("index")
   
})

app.post('/submit', async (req, res) => {
    const d = req.body;
    const data={
    sroll: d.sroll,
    sname: d.sname,
    semail: d.semail,
    scourse: d.scourse,
  };
    await insertDocument(data);
    res.redirect("/index");
    
});
app.get("/delete",async (req,res)=>{
    const d={sroll:req.query.sroll};
    const result= await delelteDocuments(d);
    
    res.redirect("/index");
})
app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/contact", (req, res) => {
    res.render("contact");
});
app.get("/registration", (req, res) => {
    res.render("registration");
});

app.get("/update",async (req,res)=>{
    const d={sroll:req.query.sroll};
    const doc=await queryDocuments(d);
    // console.log(doc);
    res.render("update",{'student':doc});
    // res.render("update");
})




app.get("*", (req, res) => {
    res.render("404");
});

app.listen(3000, () => { console.log("machine is running in 3000") });