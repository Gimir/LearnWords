const db = require('../db');
const ObjectID = require('mongodb').ObjectID;


const addDictionary = (dictionary, cb) => {
   db.get().collection('dictionaries').insertOne(dictionary, (err, result) => {
     cb(err, result);
   })
}

const getDictionaries = (id, cb) => {
  db.get().collection('dictionaries').find({'groupId': id}).toArray((err, docs) => {
    cb(err, docs);
  });
}

const changeDictionary = (id, name, words, cb) => {
  db.get().collection('dictionaries').findOneAndUpdate({'_id': ObjectID(id)}, {
    $set: {
    'name': name,
    'words': words
  }}, (err, result) => {
    cb(err, result);
  });
}

const deleteDictionary = (id, cb) => {
  db.get().collection('dictionaries').deleteOne({'_id': ObjectID(id)}, (err, result) => {
    cb(err, result);
  });
}


exports.addDictionary = addDictionary;
exports.getDictionaries = getDictionaries;
exports.changeDictionary = changeDictionary;
exports.deleteDictionary = deleteDictionary;
