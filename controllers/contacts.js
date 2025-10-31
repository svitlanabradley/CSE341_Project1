const mongodb = require('../data/database');
const objectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDb().db('project1').collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts); 
  });
};

const getSingle = async (req, res) => {
    const contactId = new objectId(req.params.id);
    const result = await mongodb.getDb().db('project1').collection('contacts').find({_id: contactId});
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts[0]); // we just need the first one (the only one)
  });

};

module.exports = { getAll, getSingle };