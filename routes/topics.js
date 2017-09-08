// routes/topics.js

'use strict';

const express = require('express');

const Topic = require('../models/topics');

const router = express.Router();

const mongoose = require('mongoose');

const axios = require('axios');

const H2020TopicsAPI = "http://ec.europa.eu/research/participants/portal/data/call/h2020/topics.json";

/****** ONLY CREATE ONCE *****/
// create data in database

// get data from h2020 topics and store it to DB

// IMPORTANTTTTTT
// IMPORTANTTTTTT

// axios.get(H2020TopicsAPI)
//     .then(response => {
//         //console.log(response);
//         let res = response.data.topicData.Topics;
//         res.forEach((topic,i) => {
//             Topic.create(topic);
//             console.log(i)
//         })
//     })
//     .catch(error => {
//         console.log(error);
//     });

// IMPORTANTTTTTT
// IMPORTANTTTTTT

 /****** END OF CREATING DB *****/

// route definitions here....
Topic.createMapping(function(err, mapping) {
    if (err) {
      console.log('error creating mapping (you can safely ignore this)');
      console.log(err);
    } else {
      console.log('mapping created!');
      console.log(mapping);
    }
  });

Topic.search({
    query_string: {
      query: "information"
    }
  }, function(err, results) {
    // results here
    if(err){
        console.log(err);
    }else{
        console.log(results)
    }
  });

router.route('/topics')
    // post a task 

    //.post((req, res) => {

    //    const task = new Task({
    //        name: req.body.name,
    //        note: req.body.note
    //    });

    //    task.save((err) => {
    //        if (err) {
    //            return res.send(err);
    //        }

    //        return res.json({ message: 'New task created!' });
    //    });
    //})

    // get all the tasks
    .get((req, res) => {
        Topic.find({}).sort({ createdAt: -1 })
            .exec((err, topic) => {
                if (err) {
                    return res.send(err);
                }
                return res.json(topic);
            })
    })

// routes starting with /todo/:id

// router.route('/books/:id')
//     // get a specifical data
//     .get((req, res) => {
//         Task.findById(req.params.id, (err, task) => {
//             if (err) {
//                 return res.send(err);
//             }
//             return res.json(task);
//         });
//     })

    // update a specifical data

    //.put((req, res) => {
    //    Task.findByIdAndUpdate(req.params.id, {
    //        name: req.body.name,
    //        note: req.body.note,
    //        completed: req.body.completed
    //    }, (err) => {
    //        if (err) {
    //            return res.send(err);
    //        }
    //        return res.json({ message: 'Task updated successfully'});
    //        })
    //})

    // delete a data

    // .delete((req, res) => {
    //     Task.remove({ _id: req.params.id }, (err) => {
    //         if (err) {
    //             return res.send(err);
    //         }
    //         return res.json({ message: 'Task has been removed!' });
    //     });
    // });



module.exports = router;