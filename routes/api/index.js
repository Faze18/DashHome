const router = require("express").Router();
const userRoutes = require("./users");
const dataRoutes = require("./data");
const topicRoutes = require("./topics");
// // API Routes
router.use("/users", userRoutes);
router.use("/data", dataRoutes);
router.use("/topic", topicRoutes);
// If no API routes are hit, send the React app


module.exports = router;