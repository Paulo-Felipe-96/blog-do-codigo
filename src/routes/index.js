const postRoutes = require("./postRoutes");
const userRoutes = require("./userRoutes");
const express = require("express");
const { environment } = require("../config");

const routes = (app) => {
  app.get("/status", (req, res) => {
    res.status(200).json({ info: { ambiente: environment }, status_code: 200 });
  });

  app.use(express.json(), postRoutes, userRoutes);
};

module.exports = routes;
