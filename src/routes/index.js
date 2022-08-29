const postRoutes = require("./postRoutes");
const userRoutes = require("./userRoutes");
const express = require("express");

const routes = (app) => {
  app.get("/", (req, res) => {
    res.status(200).json({ message: "Olá. Seja bem-vinde!" });
  });

  app.use(express.json(), postRoutes, userRoutes);
};

module.exports = routes;
