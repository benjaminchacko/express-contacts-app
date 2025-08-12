/* Mongoose elements destructured here and exported for a cleaner index.js and Contact model file */
const mongoose = require("mongoose");

const Connect = mongoose.connect;
const Schema = mongoose.Schema;
const Id = mongoose.Schema.Types.ObjectId;
const Model = mongoose.model;

exports.Connect = Connect;
exports.Schema = Schema;
exports.Model = Model;
exports.Id = Id;
