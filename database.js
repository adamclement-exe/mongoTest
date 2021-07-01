const express = require('express');
const router = express.Router();

/*
const mongoServer = require('mongodb');
const mongoClient = mongoServer.MongoClient;
const dbName = 'aaa';
const serverUrl = 'mongodb+srv://aaa:uR2PckB4TvEvQxRW@cluster0.y12j6.mongodb.net/aaa?retryWrites=true&w=majority';

// Create a database
const dbUrl =  serverUrl + dbName;
const client = new mongoClient(dbUrl, { useUnifiedTopology: true});

client.connect( (err, db) => {
    if (err) {
        console.log(err);
        return;
    }
    else {
        console.log('Database successfully created!');
        db.close();
    }
});


mongoose.connect('mongodb+srv://aaa:uR2PckB4TvEvQxRW@cluster0.y12j6.mongodb.net/aaa', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(() => console.log('DB Connected!'))
.catch(err => {
     console.log('DB Connection Error: ' + err);
});*/

const mongoose = require("mongoose");

var uri = "mongodb+srv://aaa:uR2PckB4TvEvQxRW@cluster0.y12j6.mongodb.net/aaa";

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});