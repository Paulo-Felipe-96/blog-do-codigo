const router = require("express").Router();
const { adiciona, lista } = require("../controllers/posts/postsController");

router.get("/post", lista).post("/post", adiciona);

module.exports = router;
