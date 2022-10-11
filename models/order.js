const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = require('./itemSchema');

const lineItemsSchema = new Schema({
    qty: {
        type: Number,
        default: 1
    },
    item : itemSchema
},{
    timestamps: true,
    toJSON: {virtuals: true}
});



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