const router = require("express").Router();
const mybountyCountroller = require("../../controllers/mybountyController");

// Matches with "/api/mybounty"
router.route("/")
  .get(mybountyCountroller.findAll)
  .post(mybountyCountroller.create)


// Matches with "/api/mybounty/:id"
router.route("/:id")
  .get(mybountyCountroller.findById)
  .put(mybountyCountroller.update)
  .delete(mybountyCountroller.remove);

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