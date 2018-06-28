const router = require("express").Router();
const mybountyCountroller = require("../../controllers/mybountyController");

// Matches with "/api/harvest"
router.route("/")
  .get(mybountyCountroller.findAll)
  .post(mybountyCountroller.create)
  // .delete(mybountyCountroller.delete);

// Matches with "/api/harvest/:id"
// router
//   .route("/:id")
//   .get(mybountyCountroller.findById)
//   .put(mybountyCountroller.update)
//   .delete(mybountyCountroller.remove);

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