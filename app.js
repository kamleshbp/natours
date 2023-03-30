const fs = require("fs");
const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours.json`, "utf-8")
);

const getAllTours = (req, res) => {
  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    data: {
      tours,
    },
  });
};

const createTour = (req, res) => {
  console.log(req.body);
  res.status(201).json({
    status: "success",
    data: {
      tours,
    },
  });
};

const getTour = (req, res) => {
  console.log(req.params);
  const tour = tours[0];
  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
};

const updateTour = (req, res) => {
  console.log(req.params);
  const tour = tours[0];
  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
};

const deleteTour = (req, res) => {
  console.log(req.params);
  const tour = tours[0];
  res.status(204).json({
    status: "success",
    data: {
      tour,
    },
  });
};

const getAllUsers = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not defined yet.",
  });
};
const createUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not defined yet.",
  });
};
const getUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not defined yet.",
  });
};
const updateUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not defined yet.",
  });
};
const deleteUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not defined yet.",
  });
};

const tourRouter = express.Router();
const userRouter = express.Router();

app.use((req, res, next) => {
  console.log("Hello from server !!");
  next();
});
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

tourRouter.use((req, res, next) => {
  console.log("Hello from middleware of tourRouter !!");
  next();
});

tourRouter.route("/").get(getAllTours).post(createTour);
tourRouter.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

userRouter.route("/").get(getAllUsers).post(createUser);
userRouter.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

const port = 8000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
