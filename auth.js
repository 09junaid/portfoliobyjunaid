const express = require("express");
const controllers = require("./acontrollers");
const authMiddleware=require("./middleware/auth-middleware")
const router = express.Router();
router.route("/").get(controllers.home)
router.route("/register").post(controllers.register)
router.route("/login").post(controllers.login)
// router.route("/users").get(authMiddleware,controllers.users) //*__authMiddleware to check the json web token (JWT) the user can save it or not *//
module.exports = router;
