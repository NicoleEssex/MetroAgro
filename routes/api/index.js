const router = require("express").Router();
const harvestRoutes = require("./harvest");

// Book routes
router.use("/harvest", harvestRoutes);

module.exports = router;