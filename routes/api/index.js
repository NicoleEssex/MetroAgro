const router = require("express").Router();
const harvestRoutes = require("./harvest");

// Harvest routes
router.use("/harvest", harvestRoutes);

module.exports = router;