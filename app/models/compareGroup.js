'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * CompareGroup Schema
 */
var CompareGroupSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: [String],
    attributes: [{
        attributeName: String,
        score: Number,
        unitOfMeasurement: String
    }],
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }

});


  

    
    // optionsKanye: [{
    //     optionName: String,
    //     optionScore: [Number]
    // }],
    // optionAttributes: [{
    //     attributeName: String,
    //     optionImportance: Number,
    //     optionuom: String
    // }],
    //   

    
/**
 * Validations
 */
// CompareGroupSchema.path('optionName').validate(function(optionName) {
//     return optionName.length;
// }, 'Title cannot be blank');

/**
 * Statics
 */
CompareGroupSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('user', 'name username').exec(cb);
};

mongoose.model('CompareGroup', CompareGroupSchema);
