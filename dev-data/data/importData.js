const fs = require("fs");
// eslint-disable-next-line import/no-extraneous-dependencies
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  encodeURIComponent(process.env.DATABASE_PASSWORD)
);

mongoose.connect(DB).then(() => {
  console.log("Connection successfull !!");
});

const Tour = require("../../models/tourModel");

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, "utf-8")
);

const deleteData = async () => {
  try {
    console.log("Deleting data...");
    await Tour.deleteMany();
    console.log("Data deleted successfully.");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const importData = async () => {
  try {
    console.log("Importing data...");
    await Tour.create(tours);
    Tour.create();
    console.log("Data imported successfully.");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
