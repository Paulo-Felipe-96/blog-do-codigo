const app = require("./app");
const { app_port } = require("./config");

function startApp() {
  return app.listen(app_port, () =>
    console.log(`Server is running on: http://localhost:${app_port}`)
  );
}

try {
  startApp();
} catch (error) {
  throw new Error(error);
}