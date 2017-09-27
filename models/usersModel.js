'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String, //Information that can help collect data better (may not be necessary calculation wise)
    firm: String, //Information that can help collect data better (may not be necessary calculation wise)
    id: Number, //What number user this is
    signup_date: Date //Can help with finding average calculations
});

module.exports = mongoose.model('Users', userSchema)