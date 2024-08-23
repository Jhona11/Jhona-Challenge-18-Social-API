const { User, Thought } = require("../models");

async function getThoughts(req, res) {
  Thought.find()
    .then(thought => {
      return res.status(200).json(thought);
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json(err);
    });
}

async function getThought(req, res) {
  Thought.findOne({ _id: req.params.thoughtId })
    .then(thought => {
      if (!thought) {
        return res.status(404).json({ message: "Invalid thought ID" });
      }

      return res.status(200).json(thought);
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json(err);
    });
}

async function createThought(req, res) {
  Thought.create(req.body)
    .then(thought => {
      User.findByIdAndUpdate(
        req.body.userId,
        { $addToSet: { thoughts: thought._id } },
        { runValidators: true, new: true }
      ).
        then(user => {
          return res.status(200).json({ thought, user });
        });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json(err);
    });
}

async function updateThought(req, res) {
  Thought.findOneAndUpdate(
    { _id: req.params.thoughtId },
    { $set: req.body },
    { runValidators: true, new: true }
  )
    .then(thought => {
      if (!thought) {
        return res.status(404).json({ message: "Invalid thought ID" });
      }

      return res.status(200).json(thought);
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json(err);
    });
}

async function deleteThought(req, res) {
  Thought.findOneAndDelete({
    _id: req.params.thoughtId,
  })
    .then(thought => {
      if (!thought) {
        return res.status(404).json({ message: "Invalid thought ID" });
      }

      return res.status(200).json({ message: "Thought and associated reactions deleted" });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json(err);
    });
}

async function addReaction(req, res) {
  Thought.findOneAndUpdate(
    { _id: req.params.thoughtId },
    { $addToSet: { reactions: req.body } },
    { runValidators: true }
  )
    .then(thought => {
      if (!thought) {
        return res.status(404).json({ message: "Invalid thought ID" });
      }

      return res.status(200).json(thought);
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json(err);
    });
}

async function deleteReaction(req, res) {
  Thought.findOneAndDelete(
    { _id: req.params.thoughtId },
    { $pull: { reactions: { _id: req.params.reactionId } } },
    { runValidators: true, new: true }
  )
    .then(thought => {
      if (!thought) {
        return res.status(404).json({ message: "Invalid thought ID and/or reaction ID" });
      }

      return res.status(200).json(thought);
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json(err);
    });
}

module.exports = { getThoughts, getThought, createThought, updateThought, deleteThought, addReaction, deleteReaction };