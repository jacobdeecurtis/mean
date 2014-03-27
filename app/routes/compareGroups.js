'use strict';

// Articles routes use articles controller
var compareGroups = require('../controllers/compareGroups');
// var authorization = require('./middlewares/authorization');


// var hasAuthorization = function(req, res, next) {
// 	if (req.compareGroup.user.id !== req.user.id) {
//         return res.send(401, 'User is not authorized');
//     }
//     next();
// };

module.exports = function(app) {
    
    // Home route
    // app.get('/', compareGroups.render);


    // app.get('/compareGroups', compareGroups.all);
    app.post('/compareGroups', compareGroups.create);
    // app.get('/compareGroups/:compareGroupId', compareGroups.show);
    // app.put('/compareGroups/:compareGroupId', authorization.requiresLogin, hasAuthorization, compareGroups.update);
    // app.del('/compareGroups/:compareGroupId', authorization.requiresLogin, hasAuthorization, compareGroups.destroy);

    // Finish with setting up the articleId param
    // app.param('compareGroupId', compareGroups.compareGroups);

};