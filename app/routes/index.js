'use strict';

module.exports = function(app) {
    
    // Home route
    var index = require('../controllers/index');
    app.get('/', index.render);
    app.get('/', compareGroups.all);
    app.post('/',  compareGroups.create);

};





