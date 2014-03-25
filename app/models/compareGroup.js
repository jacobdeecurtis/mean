// 'use strict';

/**
 * Module dependencies.
 */
// var mongoose = require('mongoose'),
//     Schema = mongoose.Schema;


/**
 * CompareGroup Schema
 */
// var CompareGroupSchema = new Schema({
//     created: {
//         type: Date,
//         default: Date.now
//     },
//     optionKanye: [{
//         optionName: String,
//         compareGroupattributes: [{
//         compareGroupattributeName: String,
//         compareGroupimportance: Number,
//         compareGroupscore: Number,
//         compareGroupuom: String
//         }]
//     }],
//     user: {
//         type: Schema.ObjectId,
//         ref: 'User'
//     }
// });

/**
 * Validations
 */
// CompareGroupSchema.path('optionKanye').validate(function(optionKanye) {
//     return optionKanye.length;
// }, 'Title cannot be blank');

/**
 * Statics. I don't know if I need this crap below. 
 */
// CompareGroupSchema.statics.load = function(id, cb) {
//     this.findOne({
//         _id: id
//     }).populate('user', 'name username').exec(cb);
// };

// mongoose.model('CompareGroup', CompareGroupSchema);
