// 'use strict';

// var mongoose = require('mongoose'),
//     CompareGroup = mongoose.model('CompareGroup'),
//     _ = require('lodash');

// exports.render = function(req, res) {
//     res.render('index', {
//         user: req.user ? JSON.stringify(req.user) : 'null'
//     });
// };

/**
 * Module dependencies.
 */



/**
 * Find article by id
 */
// exports.compareGroup = function(req, res, next, id) {
//     CompareGroup.load(id, function(err, compareGroup) {
//         if (err) return next(err);
//         if (!compareGroup) return next(new Error('Failed to load compareGroup ' + id));
//         req.compareGroup = compareGroup;
//         next();
//     });
// };

/**
 * Create an article
 */
// exports.create = function(req, res) {
//     var compareGroup = new CompareGroup(req.body);
//     compareGroup.user = req.user;

//     compareGroup.save(function(err) {
//         if (err) {
//             return res.send('users/signup', {
//                 errors: err.errors,
//                 compareGroup: compareGroup
//             });
//         } else {
//             res.jsonp(compareGroup);
//         }
//     });
// };



/**
 * List of Articles
 */
// exports.all = function(req, res) {
//     CompareGroup.find().sort('-created').populate('user', 'name username').exec(function(err, compareGroups) {
//         if (err) {
//             res.render('error', {
//                 status: 500
//             });
//         } else {
//             res.jsonp(compareGroups);
//         }
//     });
// };