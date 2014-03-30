'use strict';

/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
    CompareGroup = mongoose.model('CompareGroup'),
    _ = require('lodash');


/**
 * List of Articles
 */
exports.all = function(req, res) {
    CompareGroup.find().sort('-created').exec(function(err, compareGroups) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(compareGroups);
        }
    });
};

/**
 * Create an article
 */
exports.create = function(req, res) {
   
   
    console.log("sdfasdf");
        var CompareGroup = new CompareGroup(req.body);
    // compareGroup.user = req.user;

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


