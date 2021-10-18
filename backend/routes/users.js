const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");

router.get("",usersController.getUsers);
router.post("",usersController.addUsers);
// Si quiero agregar otro get, es importante agregarlo antes que el de abajo
router.get("/:email",usersController.getUserByEMail);
router.delete("/:email",usersController.deleteUserByEMail);
router.post("/:email",usersController.editUser);

module.exports = router;