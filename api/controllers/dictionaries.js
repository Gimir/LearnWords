const Dictionaries = require('../models/dictionaries');


const addDictionary = (req, res) => {
  var dictionary = {
    name: req.body.name,
    words: req.body.words,
    groupId: req.body.groupId
  };
  Dictionaries.addDictionary(dictionary, (err, result) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    console.log(result);
    res.send(dictionary);
  });
}

const getDictionaries = (req, res) => {
  const id = req.params.id;
  Dictionaries.getDictionaries(id, (err, docs) => {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.send(docs);
  });
}

const changeDictionary = (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const words = req.body.words;
  Dictionaries.changeDictionary(id, name, words, (err, result) => {
    if(err) {
      console.log(err);
      return res.sendStatus(500);
    }
    else if(!result.value) {
      console.log(result.lastErrorObject);
      return res.sendStatus(400);
    }
    res.sendStatus(200);
  });
}

const deleteDictionary = (req, res) => {
  const id = req.params.id;
  Dictionaries.deleteDictionary(id, (err, result) => {
    if(err) {
      console.log(err);
      return res.sendStatus(500);
    }
    else if(!result.deletedCount) {
      console.log(result.deletedCount);
      return res.sendStatus(400);
    }
    res.sendStatus(200);
  });
}

exports.addDictionary = addDictionary;
exports.getDictionaries = getDictionaries;
exports.changeDictionary = changeDictionary;
exports.deleteDictionary = deleteDictionary;
