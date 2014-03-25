'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Article Schema
 */
var CompareGroupSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    optionKanye: [{
        optionAttributeName: String,
        attributes: [{
        attributeName: String,
        score: Number,
        uom: String
        }]
    }],
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

/**
 * Validations
 */
CompareGroupSchema.path('optionKanye').validate(function(optionKanye) {
    return optionKanye.length;
}, 'Title cannot be blank');

/**
 * Statics
 */
ArticleSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('user', 'name username').exec(cb);
};

mongoose.model('CompareGroup', CompareGroupSchema);