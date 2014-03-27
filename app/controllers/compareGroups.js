'use strict';

/**
 * Module dependencies.
 */

var mongoose = require('mongoose'),
    CompareGroup = mongoose.model('CompareGroup'),
    _ = require('lodash');

/**
 * Create an article
 */
exports.create = function(req, res) {
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


