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
    name: {
        type: String,
        default: '',
        trim: true
    },
    picture: {
        type: String,
        default: '',
        trim: true
    },
    optionsKanye: [{
        optionName: String,
        score: Number
    }],
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }

});


  

    // created: {
    //     type: Date,
    //     default: Date.now
    // },
    // optionsKanye: [{
    //     optionName: String,
    //     optionScore: [Number]
    // }],
    // optionAttributes: [{
    //     attributeName: String,
    //     optionImportance: Number,
    //     optionuom: String
    // }],
    //   user: {
    //     type: Schema.ObjectId,
    //     ref: 'User'
    // }

    
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
