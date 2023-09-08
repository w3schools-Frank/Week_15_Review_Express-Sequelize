const express = require("express");
const router = express.Router();
const learnerController = require("../controllers/leanerController");
const { checkNameProvided } = require("../middleware/nameNotProvided");
const { idNotNumber } = require("../middleware/idNotNumber");

router.get("/", learnerController.getAllLearners);

router.get("/:id", idNotNumber, learnerController.getSingleLearner);

router.post("/", checkNameProvided, learnerController.addNewLearner);

router.put("/:id",[idNotNumber, checkNameProvided], learnerController.editLearner);

router.delete("/:id", idNotNumber, learnerController.deleteLearner);

module.exports = router;