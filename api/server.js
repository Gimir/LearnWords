var express = require('express');
var cors = require('cors');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var db = require('./db');
const groupsController = require('./controllers/groups');
const dictController = require('./controllers/dictionaries');

var app = express();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());


app.get('/', groupsController.getGroups); // load all group's names
app.get('/selectGroup/:id', dictController.getDictionaries); // select group

app.post('/addGroup/:name', groupsController.addGroup);     // create new group
app.post('/addDictionary', dictController.addDictionary);  // create new wocalabulary

app.put('/changeDictionary', dictController.changeDictionary); // change wocalabulary

app.delete('/deleteGroup/:id', groupsController.deleteGroup);        // delete group
app.delete('/deleteDictionary/:id', dictController.deleteDictionary); // delete wocalabulary



db.connect('mongodb://localhost:27017/api', (err) => {
  if (err) return console.log(err);

  app.listen(5000, () => {
    console.log('API app started');
  })
})
