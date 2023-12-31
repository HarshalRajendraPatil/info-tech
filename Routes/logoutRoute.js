const express = require("express");
const router = express.Router();

// Route for login on GET request
router.get("/", (req, res, next) => {
  if (req.session) {
    req.session.destroy(() => {
      res.redirect("/login");
    });
  }
});

module.exports = router;
