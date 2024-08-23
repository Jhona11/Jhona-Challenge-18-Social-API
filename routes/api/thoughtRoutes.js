// Imports
const router = require("express").Router();

// Imports functions written in thoughtController.js file
const { getThoughts, getThought, createThought, updateThought, deleteThought, addReaction, deleteReaction } = require("../../controllers/thoughtController");

router.route("/").get(getThoughts);
router.route("/").post(createThought);

router.route("/:thoughtId").get(getThought);
router.route("/:thoughtId").put(updateThought);
router.route("/:thoughtId").delete(deleteThought);

router.route("/:thoughtId/reactions").post(addReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

// Exports
module.exports = router;