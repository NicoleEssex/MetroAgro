const router = require("express").Router();
const mybountyRoutes = require("./harvest");

// Harvest routes
router.use("/mybounty", mybountyRoutes);

module.exports = router;