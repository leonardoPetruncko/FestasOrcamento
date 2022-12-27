const router = require("express").Router();

// Services Router
const servicesRouter = require("./services");

router.use("/", servicesRouter);

module.exports = router;