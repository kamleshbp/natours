const fs = require("fs");
const express = require("express");

const app = express();

app.use(express.json());

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours.json`, "utf-8")
);

const getAllTours = (req, res) => {
  res.status(200).json({
    status: "success",
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

// app.get("/api/v1/tours", getAllTours);
// app.post("/api/v1/tours", createTour);
// app.get("/api/v1/tours/:id", getTour);
// app.patch("/api/v1/tours/:id", updateTour);
// app.delete("/api/v1/tours/:id", deleteTour);

app.route("/api/v1/tours").get(getAllTours).post(createTour);
app
  .route("/api/v1/tours/:id")
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

const port = 8000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
