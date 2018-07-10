const router = require("express").Router();
const mybountyCountroller = require("../../controllers/mybountyController");
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');


const authCheck = jwt({
  secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        // YOUR-AUTH0-DOMAIN name e.g https://prosper.auth0.com
        jwksUri: "https://metro-agro.auth0.com/.well-known/jwks.json"
    }),
    // This is the identifier we set when we created the API
    audience: 'https://metro-agrov2.com',
    issuer: 'https://metro-agro.auth0.com/',
    algorithms: ['RS256']
});



// Matches with "/api/mybounty"
router.route("/")
  .get(mybountyCountroller.findAll)
  .post(mybountyCountroller.create)


// Matches with "/api/mybounty/:id"
router.route("/:id")
  .get(authCheck, mybountyCountroller.findById)
  .put(authCheck, mybountyCountroller.update)
  .delete(authCheck, mybountyCountroller.remove);

// //Matches with "api/harvest/:item"
// router 
//   .route("/:item")
//   .get(mybountyCountroller.findByItem)
//   .put(mybountyCountroller.update)
//   .delete(mybountyCountroller.remove);

module.exports = router;


// needs crops by a user

// available harvests - all crops set to true

// 