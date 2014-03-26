'use strict';

/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
    Article = mongoose.model('CompareGroup'),
    _ = require('lodash');


exports.render = function(req, res) {
    console.log("in index!!!");
    res.render('index', {
        user: req.user ? JSON.stringify(req.user) : 'null'
    });
};




/**
 * Find article by id
 */
exports.CompareGroup = function(req, res, next, id) {
    CompareGroup.load(id, function(err, CompareGroup) {
        if (err) return next(err);
        if (!CompareGroup) return next(new Error('Failed to load CompareGroup ' + id));
        req.CompareGroup = CompareGroup;
        next();
    });
};

/**
 * Create an article
 */
exports.create = function(req, res) {
    var CompareGroup = new CompareGroup(req.body);
    compareGroup.user = req.user;

    compareGroup.save(function(err) {
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
 * Update an article
 */
// exports.update = function(req, res) {
//     var compareGroup = req.compareGroup;

//     com = _.extend(article, req.body);

//     article.save(function(err) {
//         if (err) {
//             return res.send('users/signup', {
//                 errors: err.errors,
//                 article: article
//             });
//         } else {
//             res.jsonp(article);
//         }
//     });
// };

/**
 * Delete an article
 */
// exports.destroy = function(req, res) {
//     var article = req.article;

//     article.remove(function(err) {
//         if (err) {
//             return res.send('users/signup', {
//                 errors: err.errors,
//                 article: article
//             });
//         } else {
//             res.jsonp(article);
//         }
//     });
// };

/**
 * Show an article
 */
// exports.show = function(req, res) {
//     res.jsonp(req.article);
// };

/**
 * List of Articles
 */
exports.all = function(req, res) {
    CompareGroup.find().sort('-created').populate('user', 'name username').exec(function(err, compareGroups) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(compareGroups);
        }
    });
};
