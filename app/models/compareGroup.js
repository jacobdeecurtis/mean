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
    attributes: [{
        attributeName: String,
        score: Number,
        uom: String
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

    // optionName: String,
    // user: {
    //     type: Schema.ObjectId,
    //     ref: 'User'
    // }

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
    //  user: {
    //     type: Schema.ObjectId,
    //     ref: 'User'
    // }

//});


// CompareGroupSchema.path('optionName').validate(function(optionName) {
//     return optionName.length;
// }, 'Title cannot be blank');
/**
 * Validations
 */
CompareGroupSchema.path('name').validate(function(name) {
    return name.length;
}, 'Title cannot be blank');

/**
 * Statics
 */
CompareGroupSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('user', 'name username').exec(cb);
};

mongoose.model('CompareGroup', CompareGroupSchema);
