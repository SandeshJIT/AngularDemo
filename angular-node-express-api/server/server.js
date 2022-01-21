const express = require('express');
var bodyParser = require('body-parser')
const app = express();
app.use(bodyParser());
const cors = require('cors');

port = 4300
app.use(cors());
app.listen(port,()=>{
    console.log("listening");
})
const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.1.9', (err, client) => {
    if(err){
        return console.log(err);
    }
    else{
        console.log("Connected to DB");
        const db = client.db("test2");
        app.get("/",(req,res) =>{
                db.collection("list").find().toArray().then((result) =>{
                    console.log(result);
                    res.send(result);
                    
                })
        })    
        app.post("/upload",(req,res) =>{
           
            console.log(req.body)
            db.collection("list").insertOne(req.body);
            // res.send("Success");
            
            })
           
    }
})

 
