'use strict';

// Articles routes use articles controller
var index = require('../controllers/compareGroups');
var authorization = require('./middlewares/authorization');


var hasAuthorization = function(req, res, next) {
	if (req.compareGroup.user.id !== req.user.id) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

module.exports = function(app) {
    
    // // Home route
    app.get('/', index.render);


    app.get('/index', index.all);
    app.post('/index', authorization.requiresLogin, index.create);
    // app.get('/index/:compareGroupId', index.show);
    // app.put('/index/:compareGroupId', authorization.requiresLogin, hasAuthorization, index.update);
    // app.del('/index/:compareGroupId', authorization.requiresLogin, hasAuthorization, index.destroy);

    // Finish with setting up the articleId param
    // app.param('compareGroupId', index.compareGroups);

};