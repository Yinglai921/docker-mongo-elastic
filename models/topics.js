
// models/topics.js

const mongoose = require('mongoose');
const mongoosastic = require('mongoosastic');
const elasticsearch = require('elasticsearch');
const Schema = mongoose.Schema;

esClient = new elasticsearch.Client({host: 'http://127.0.0.1:9200'});

// create a new schema
const Topic = new Schema({
    topicId: {type: Number},
    subCallId: {type: Number},
    topicFileName: {type: String},
    callProgramme: {type: String},
    callFileName: {type: String},
    callStatus: {type: String},
    plannedOpeningDate: {type: String},
    plannedOpeningDateLong: {type: Number},
    publicationDate: {type: String},
    publicationDateLong: {type: Number},
    mainSpecificProgrammeLevelCode: {type: String},
    mainSpecificProgrammeLevelDesc: {type: String},
    deadlineDates: {type: Array},
    deadlineDatesLong: {type: Array},
    identifier: {type: String},
    title: {type: String},
    tags: {type: Array},
    keywords: {type: Array},
    flags: {type: Array},
    actions: {type: Array},
    callIdentifier: {type: String},
    callTitle: {type: String}

});

Topic.plugin(mongoosastic, {
    esClient: esClient
});

module.exports = mongoose.model('topics', Topic);