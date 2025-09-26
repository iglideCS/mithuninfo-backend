const express = require("express")
const router = express.Router();
const authControllers = require("../controller/auth-controller")
const { signupSchema, loginSchema } = require("../validators/auth-validators");
const { validate, loginValidate } = require("../middlewares/validate-middleware")
const authMiddleware = require("../middlewares/auth-Middleware");


router.route("/").get(authControllers.home);
router.route("/register").post(validate(signupSchema), authControllers.register);
router.route("/login").post(loginValidate(loginSchema), authControllers.login);


router.route("/user").get(authMiddleware, authControllers.user);

module.exports = router;