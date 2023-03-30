const fs = require("fs");

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours.json`, "utf-8")
);

exports.checkId = (req, res, next, val) => {
  console.log(`The value of id is ${val}.`);
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    data: {
      tours,
    },
  });
};

exports.createTour = (req, res) => {
  console.log(req.body);
  res.status(201).json({
    status: "success",
    data: {
      tours,
    },
  });
};

exports.getTour = (req, res) => {
  console.log(req.params);
  const tour = tours[0];
  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
};

exports.updateTour = (req, res) => {
  console.log(req.params);
  const tour = tours[0];
  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
};

exports.deleteTour = (req, res) => {
  console.log(req.params);
  const tour = tours[0];
  res.status(204).json({
    status: "success",
    data: {
      tour,
    },
  });
};
