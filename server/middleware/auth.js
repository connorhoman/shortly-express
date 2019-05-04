const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
    // Accesses cookies from req
    // Checks if logged in 
        // if so, GET user session info
        // attach user info to req.session
    // If not
        // create session
        // attach cookie
    
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

