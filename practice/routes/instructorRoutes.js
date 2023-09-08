const express = require("express");
const router = express.Router();
const instructorController = require("../controllers/instructorController");
const { checkNameProvided } = require("../middleware/nameNotProvided");
const { idNotNumber } = require("../middleware/idNotNumber");

router.get("/", instructorController.getAllInstructors);

router.get("/:id", idNotNumber, instructorController.getSingleInstructor);

router.post("/", checkNameProvided, instructorController.addNewInstructor);

router.put("/:id",[idNotNumber, checkNameProvided], instructorController.editInstructor);

router.delete("/:id", idNotNumber, instructorController.deleteInstructor);

module.exports = router;