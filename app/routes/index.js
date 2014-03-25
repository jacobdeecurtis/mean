'use strict';

module.exports = function(app) {
    
    // Home route
    var index = require('../controllers/index');
    app.get('/index',  index.render);
    app.post('/index',  authorization.requiresLogin, compareGroups.create);
    app.get('/index', compareGroups.all);
    

};





