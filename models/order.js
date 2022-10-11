const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = require('./itemSchema');





const orderSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    lineItems:[lineItemsSchema],
    paid:{
        type: Boolen, 
        default: false
    }
},{
    timestamps:true,
    toJson: {
        virtuals : true
    }
});