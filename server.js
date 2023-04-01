// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });
const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  encodeURIComponent(process.env.DATABASE_PASSWORD)
);
// console.log(DB);
mongoose.connect(DB).then((con) => {
  console.log("Connection successfull !!");
  console.log(con.connections);
});

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A tour must have a name."],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, "A tour must have a price."],
  },
});

const Tour = mongoose.model("Tour", tourSchema);
// console.log(app.get("env"));
// console.log(process.env);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
