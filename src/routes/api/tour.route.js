const express = require("express");
const router = express.Router();

const TourController = require("../../app/controllers/tour.controller");

router.post("/store", TourController.store);
router.get("/getTours", TourController.getTours);
module.exports = router;
