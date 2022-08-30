const router = require("express").Router();
const { adiciona, lista } = require("../controllers/posts/postsController");

router
  .get("/posts", lista)
  .post("/posts", adiciona);

module.exports = router;
