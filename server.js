const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");

// console.log(app.get("env"));
// console.log(process.env);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
