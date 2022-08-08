const express = require("express");
const router = express.Router();
const user = require("../models/user");

router.post("/signup", async (req, res) => {
  console.log("reached get req");
  console.log("body", req.body);
  const newuser = new user({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
    
  });

  console.log("newuser", newuser);
  const response = await newuser.save();
  res.send(200,response);
});

router.post("/login", async (req, res) => {
  if (req.body.email != "" && req.body.password != "") {
    const user_ = await user.find({
      email: req.body.email,
      password: req.body.password,
    });
    if (user_.length > 0) {
      res.json(user_);
    } else {
      res.status(201).send({ error: "No user found!" });
    }
  }
});

router.get("/user/:id", async(req,res) => {
    const user_ = await user.findById(req.params.id);
    console.log('user_',user_);
    if (user_) {
        res.json(user_);
      } else {
        res.status(201).send({ error: "No user found!" });
      }
    
})

module.exports = router;
