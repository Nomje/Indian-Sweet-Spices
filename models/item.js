const mongoose = require('mongoose');
require('./category');

const itemSchema = require('./itemSchema');

modeule.exports = mongoose.model('Item', itemSchema)