const { Router } = require('express');
const express = require('express');
const { Collection } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

const createRouter = function(collection) {

  const router = express.Router();

    router.get('/', (req, res) => {
      collection
      .find()
      .toArray()
      .then(docs => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({status: 500, error: err})
      })
    })

    // SHOW one
    router.get('/:id', (req, res) => {
    const id = req.params.id;
    collection
    .findOne({ _id: ObjectId(id) })
    .then((doc) => res.json(doc))
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({status: 500, error: err})
      })
    });

    // 
    router.post('/', (req, res) => {
    const newData = req.body;
    collection
    .insertOne(newData)
    .then((result => {
      const updatedData = {... newData};
      updatedData._id = result.insertedId;
      res.json(updatedData)
      }))
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({status: 500, error: err})
      })
    });

    router.delete('/:id', (req, res) => {
    const id = req.params.id;
    collection
    .deleteOne({ _id: ObjectID(id) })
    .then(result => {
      res.json(result)
      })
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({status: 500, error: err})
      })
    });

    router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    collection
    .updateOne(
      {_id: ObjectID(id)},
      {$set: updatedData}
    )
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({status: 500, error: err})
  })
})

return router;



};

module.exports = createRouter;