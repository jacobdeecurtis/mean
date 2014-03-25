// 'use strict';

// /**
//  * Module dependencies.
//  */
// var mongoose = require('mongoose'),
//     CompareGroup = mongoose.model('CompareGroup'),
//     _ = require('lodash');


// /**
//  * Find compareGroup by id
//  */
// exports.compareGroup = function(req, res, next, id) {
//     CompareGroup.load(id, function(err, compareGroup) {
//         if (err) return next(err);
//         if (!compareGroup) return next(new Error('Failed to load compareGroup ' + id));
//         req.compareGroup = compareGroup;
//         next();
//     });
// };

// /**
//  * Create an compareGroup
//  */
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
 * Delete an compareGroup
 */
exports.destroy = function(req, res) {
    var compareGroup = req.compareGroup;

    compareGroup.remove(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                compareGroup: compareGroup
            });
        } else {
            res.jsonp(compareGroup);
        }
    });
};

/**
 * Show an compareGroup
 */
exports.show = function(req, res) {
    res.jsonp(req.compareGroup);
};

/**
 * List of Articles
 */
exports.all = function(req, res) {
    CompareGroup.find().sort('-created').populate('user', 'name username').exec(function(err, compareGroup) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(compareGroups);
        }
    });
};
