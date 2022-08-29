const config = require("dotenv");

const app_port = process.env.APP_PORT || 3000;
const dev_host = process.env.HOST_DEV || "127.0.0.1";

const dev_username = process.env.POSTGRES_DEV_USER;
const dev_password = process.env.POSTGRES_DEV_PASSWORD;
const dev_db = process.env.DEV_DB;

module.exports = {
  app_port,
  dev_host,
  dev_username,
  dev_password,
  dev_db,
};
