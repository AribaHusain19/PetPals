//importing the modules
const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const path= require('path');
const morgan= require('morgan');

//defining our routes to make our index.js aware aboute the category routes.
const categoryRoutes = require('./routes/category');
const petRoutes = require('./routes/pet');
const adoptionRoutes = require('./routes/adoption');
//creating an instance of the application,it will be used to set up routes and middleware
const app=express();

// Middleware to parse JSON bodies
app.use(express.json());

app.use(morgan('tiny'));

app.use('/public',express.static(path.join(__dirname,'public')));
// Middleware to enable CORS.CORS allows your application to handle requests from different origins, which is particularly useful for APIs that are accessed from a web client hosted on a different domain.
app.use(cors());


//routes
app.use('/api/category', categoryRoutes);
app.use('/api/pets',petRoutes);
app.use('/api/adoption',adoptionRoutes);

//To use mongodb with express, you'll need the mongoose package to connect to the MongoDB database.
const mongourl= 'mongodb://localhost:27017/PetPalsDatabase';


app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "client", "build")));
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
    
//starting the server
app.listen(4000,() =>{
    console.log("App is listening on port 4000");
})


//Connects to the MongoDB database using Mongoose.
mongoose.connect(mongourl,{
    useNewUrlParser:true
}).then(()=>{
    console.log("connected to mongoDB")
}).catch((err) => {
    console.log("Error in connecting to mongoDB");
})

/*mongoose.connection.on('connected',()=>{
    console.log("connected to mongoDB");
})

mongoose.connection.on('error',(err) =>{
    console.log("Error in connecting to mongoDb",err);
})*/
