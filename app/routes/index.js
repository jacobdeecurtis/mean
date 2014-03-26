'use strict';

// Articles routes use articles controller
var compareGroups = require('../controllers/compareGroups');
var authorization = require('./middlewares/authorization');


var hasAuthorization = function(req, res, next) {
	if (req.compareGroup.user.id !== req.user.id) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

module.exports = function(app) {
    
    // Home route
    var index = require('../controllers/index');
    app.get('/', index.render);


    app.get('/index', compareGroups.all);
    app.post('/index', authorization.requiresLogin, compareGroups.create);
    app.get('/index/:compareGroupId', compareGroups.show);
    app.put('/index/:compareGroupId', authorization.requiresLogin, hasAuthorization, compareGroups.update);
    app.del('/index/:compareGroupId', authorization.requiresLogin, hasAuthorization, compareGroups.destroy);

    // Finish with setting up the articleId param
    app.param('compareGroupId', compareGroups.compareGroups);

};