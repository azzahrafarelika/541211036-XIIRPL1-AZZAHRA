const express = require("express");
const router = express.Router();

const userController = require("../controller/user");

//Route GET
router.get("/user", userController.index);

//Route GET By ID
router.get("/user/:id", userController.index);

//Route POST
router.post("/user", userController.store);

//Route PUT
router.put("/user/:id", userController.update);

//Route DELETE
router.delete("/user/:id", userController.delete);

module.exports = router;