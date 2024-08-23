// Imports
const { User, Thought } = require("../models");

async function getUsers(req, res) {
  User.find()
    .then(user => {
      return res.status(200).json(user);
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json(err);
    });
}

async function getUser(req, res) {
  User.findOne({ _id: req.params.userId })
    .populate({ path: "thoughts", select: "-__v" })
    .populate({ path: "friends", select: "-__v" })
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: "Invalid user ID" });
      }

      return res.status(200).json(user);
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json(err);
    });
}

async function createUser(req, res) {
  User.create(req.body)
    .then(user => {
      return res.status(200).json(user);
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json(err);
    });
}

async function updateUser(req, res) {
  User.findOneAndUpdate(
    { _id: req.params.userId },
    { $set: req.body },
    { runValidators: true, new: true }
  )
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: "Invalid user ID" });
      }

      return res.status(200).json(user);
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json(err);
    });
}

async function deleteUser(req, res) {
  User.findOneAndDelete({ _id: req.params.userId })
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: "Invalid user ID" });
      }

      Thought.deleteMany({ _id: { $in: user.thoughts } })
      .then(thought => {
        return res.status(200).json({ message: "User and associated thoughts deleted" });
      });
      
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json(err);
    });
}

async function addFriend(req, res) {
  User.findOneAndUpdate(
    { _id: req.params.userId },
    { $addToSet: { friends: req.params.friendId } },
    { runValidators: true, new: true }
  )
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: "Invalid user ID" });
      }

      return res.status(200).json(user);
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json(err);
    });
}

async function deleteFriend(req, res) {
  User.findOneAndUpdate(
    { _id: req.params.userId },
    { $pull: { friends: req.params.friendId } },
    { runValidators: true, new: true }
  )
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: "Invalid user ID and/or friend ID" });
      }

      return res.status(200).json(user);
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json(err);
    });
}

// Exports
module.exports = { getUsers, getUser, createUser, updateUser, deleteUser, addFriend, deleteFriend };