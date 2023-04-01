// const fs = require("fs");
// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours.json`, "utf-8")
// );

// exports.checkId = (req, res, next, val) => {
//   console.log(`The value of id is ${val}.`);
//   next();
// };

// exports.checkBody = (req, res, next) => {
//   console.log("Checking the data of body...");
//   next();
// };

const Tour = require("../models/tourModel");

exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json({
      status: "success",
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err,
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Invalid data sent",
    });
  }
};

exports.getTour = async (req, res) => {
  // console.log(req.params);
  // const tour = tours[0];
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "tour with given id not found",
    });
  }
};

exports.updateTour = (req, res) => {
  console.log(req.params);
  // const tour = tours[0];
  res.status(200).json({
    status: "success",
    // data: {
    //   tour,
    // },
  });
};

exports.deleteTour = (req, res) => {
  console.log(req.params);
  // const tour = tours[0];
  res.status(204).json({
    status: "success",
    // data: {
    //   tour,
    // },
  });
};
