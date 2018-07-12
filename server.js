const express = require('express');
const app = express();
//==========================================================================================================
// Auth crap that can be deleted
//==========================================================================================================
// const jwt = require('express-jwt');
// const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');


const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;


//==========================================================================================================
// Auth crap that can be deleted
//==========================================================================================================
// const authCheck = jwt({
//   secret: jwks.expressJwtSecret({
//         cache: true,
//         rateLimit: true,
//         jwksRequestsPerMinute: 5,
//         // YOUR-AUTH0-DOMAIN name e.g https://prosper.auth0.com
//         jwksUri: "https://metro-agro.auth0.com/.well-known/jwks.json"
//     }),
//     // This is the identifier we set when we created the API
//     audience: 'https://metro-agrov2.com',
//     issuer: 'https://metro-agro.auth0.com/',
//     algorithms: ['RS256']
// });


// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/metroagro");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});