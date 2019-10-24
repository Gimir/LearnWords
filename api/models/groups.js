const db = require('../db');
const ObjectID = require('mongodb').ObjectID;

const getGroups= (cb) => {
  db.get().collection('groups').find({},
    {
    projection: {
      'name': 1
    }
  }).toArray((err, docs) => {
    cb(err, docs);
  })
}


const addGroup = (group, cb) => {
  db.get().collection('groups').insertOne(group, (err, result) => {
    console.log(result);
    cb(err, result);
  });
}

const deleteGroup = (id, cb) => {
  db.get().collection('groups').deleteOne({'_id': ObjectID(id)}, (err, result) => {
    if(err) {
      return cb(err);
    }
    else if (!result.deletedCount){
      return cb(err, result);
    }
    db.get().collection('dictionaries').deleteMany({'groupId': id}, (err, result) => {
      cb(err, {deletedCount: 1});
    })
  });
}

exports.getGroups = getGroups;
exports.addGroup = addGroup;
exports.deleteGroup = deleteGroup;
