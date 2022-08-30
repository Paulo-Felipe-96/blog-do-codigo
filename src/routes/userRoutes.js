const router = require("express").Router();
const {
  adiciona,
  deleta,
  lista,
} = require("../controllers/users/usersController");

router
  .get("/usuarios", lista)
  .post("/usuarios", adiciona)
  .delete("/usuario/:id", deleta);

module.exports = router;
