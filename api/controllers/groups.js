const Groups = require('../models/groups');

const getGroups = (req, res) => {
  Groups.getGroups((err, docs) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(docs);
  })
}

const addGroup = (req, res) => {
  const group = {
    name: req.params.name
  }
  Groups.addGroup(group, (err, result) => {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    }
    return res.send(result.ops[0]);
  })
}

const deleteGroup = (req, res) => {
  const id = req.params.id;
  Groups.deleteGroup(id, (err, result) => {
    if(err) {
      console.log(err);
      return res.sendStatus(500);
    }
    else if(result.deletedCount === 0){
      console.log(result.deletedCount);
      return res.sendStatus(400);
    }
    console.log('sucsess!');
    return res.sendStatus(200);
  });
}

exports.getGroups = getGroups;
exports.addGroup = addGroup;
exports.deleteGroup = deleteGroup;
