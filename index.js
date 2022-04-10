const express = require("express");
const path = require("path");
require("dotenv").config();
const axios = require("axios");
const cors = require("cors");

const app = express();

const corConfig = {
  origin: "*",
  // process.env.ALLOWED_ORIGIN_URL, // restrict calls to those this address
  methods: "GET",
  optionsSuccessStatus: 200,
};

app.use(cors(corConfig));

app.get("/ip", (req, res) => {
  const config = {
    url: process.env.SEARCH_URL,
    params: {
      apiKey: process.env.WEATHER_API_KEY,
      q: req.query.q,
      limit: 1,
    },
  };

  axios(config)
    .then(function (response) {
      res.status(200).send(response.data);
      // console.log(req);
    })
    .catch(function (error) {
      res.send(error);
    });
});

app.get("/weather", cors(corConfig), (req, res) => {
  const options = {
    method: "GET",
    url: process.env.WEATHER_URL,
    params: {
      lat: req.query.lat,
      lon: req.query.lon,
      exclude: "hourly,minutely,alerts",
      units: "metric",
      appid: process.env.WEATHER_API_KEY,
    },
  };
  axios(options).then((response) => {
    res.status(200).send(response.data);
  });
});

app.get("/city", cors(corConfig), (req, res) => {
  const config = {
    method: "get",
    url: process.env.CITY_URL,
    params: {
      apiKey: process.env.MAP_API_KEY,
      lat: req.query.lat,
      lon: req.query.lon,
    },
  };

  axios(config)
    .then(function (response) {
      res.status(200).send(response.data);
    })
    .catch(function (error) {
      res.send(error);
    });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/build")));

  app.get("/*", (req, res) =>
    res.sendFile(path.join(__dirname, "frontend/build", "index.html")),
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

process.on("uncaughtException", (error) => {
  console.log("Oh my god, something terrible happened: ", error);

  process.exit(1); // exit application
});
process.on("unhandledRejection", (error, promise) => {
  console.log(
    " Oh Lord! We forgot to handle a promise rejection here: ",
    promise,
  );
  console.log(" The error was: ", error);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
