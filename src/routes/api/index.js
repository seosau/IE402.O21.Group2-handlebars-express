const express = require("express");
const router = express.Router();

const authRouter = require("./auth.route");
const locationRouter = require("./location.route");
const tourRouter = require("./tour.route");
const lineRouter = require("./line.route");
const routeRouter = require("./route.route");
const staffRouter = require("./staff.route");
const bookingRouter = require("./booking.route");

router.use("/auth", authRouter);
router.use("/location", locationRouter);
router.use("/tour", tourRouter);
router.use("/line", lineRouter);
router.use("/route", routeRouter);
router.use("/staff", staffRouter);
router.use("/bookings", bookingRouter);

module.exports = router;
