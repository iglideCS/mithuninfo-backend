const express = require("express");

const adminController = require("../controller/admin-controller");

const authMiddleware = require("../middlewares/auth-Middleware");
const adminMiddleware = require("../middlewares/admin-middleware");

const router = express.Router();

router
    .route("/access")
    .get(authMiddleware, adminMiddleware, adminController.getAllAdminsData);

router
    .route("/users")
    .get(authMiddleware, adminMiddleware, adminController.getAllUsersData);

router
    .route("/contacts")
    .get(authMiddleware, adminController.getAllContactsData);

router
    .route("/access/delete/:id")
    .delete(authMiddleware, adminMiddleware, adminController.getDeleteAdminsById);


router
    .route("/users/delete/:id")
    .delete(authMiddleware, adminMiddleware, adminController.getDeleteUserById);

router
    .route("/contacts/delete/:id").delete(authMiddleware, adminMiddleware, adminController.getDeleteContactsById);

module.exports = router;
