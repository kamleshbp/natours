const express = require("express");
const tourController = require("../controllers/tourController");

const router = express.Router();

router.use((req, res, next) => {
  console.log("Hello from middleware of tourRouter !!");
  next();
});

// router.param("id", tourController.checkId);

router
  .route("/")
  .get(tourController.getAllTours)
  .post(tourController.createTour);
router
  .route("/:id")
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
