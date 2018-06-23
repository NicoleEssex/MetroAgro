const router = require("express").Router();
const harvestController = require("../../controllers/harvestController");

// Matches with "/api/harvest"
router.route("/")
  .get(harvestController.findAll)
  .post(harvestController.create);

// Matches with "/api/harvest/:id"
router
  .route("/:id")
  .get(harvestController.findById)
  .put(harvestController.update)
  .delete(harvestController.remove);

//Matches with "api/harvest/:item"
router 
  .route("/:item")
  .get(harvestController.findbyItem)
  .put(harvestController.update)
  .delete(harvestController.remove);

module.exports = router;


// needs crops by a user

// available harvests - all crops set to true

// 