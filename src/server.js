const app = require("./app");
const { app_port, environment } = require("./config");

function startApp() {
  return app.listen(app_port, () =>
    console.log({
      ambiente: environment,
      mensagem: `Server is now running at: http://localhost:${app_port}`,
    })
  );
}

try {
  startApp();
} catch (error) {
  throw new Error(error);
}
