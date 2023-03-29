const fs = require("fs");
const express = require("express");

const app = express();

app.use(express.json());

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours.json`, "utf-8")
);

app.get("/", (req, res) => {
  console.log("got the request");
});

app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      tours,
    },
  });
});

app.post("/api/v1/tours", (req, res) => {
  console.log(req.body);
  res.status(201).json({
    status: "success",
    data: {
      tours,
    },
  });
});

app.get("/api/v1/tours/:id", (req, res) => {
  console.log(req.params);
  const tour = tours[0];
  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
});

app.patch("/api/v1/tours/:id", (req, res) => {
  console.log(req.params);
  const tour = tours[0];
  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
});

app.delete("/api/v1/tours/:id", (req, res) => {
  console.log(req.params);
  const tour = tours[0];
  res.status(204).json({
    status: "success",
    data: {
      tour,
    },
  });
});

const port = 8000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
