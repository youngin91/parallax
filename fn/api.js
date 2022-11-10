const express = require("express");
const cors = require("cors");
const axios = require("axios");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

app.use(
  cors({
    origin: `*`
  })
);

router.get("/", function (req, res) {
  const image = axios.get("");
});
router.get(`/search`, async function (req, res) {
  await axios
    .get(
      `https://api.unsplash.com/search/photos?page=1&query=${req.query["search"]}&client_id=1QqXbD0YhjW3uNufkUYGTsV_kA8YKIyH86v5JdX736k&per_page=100`
    )
    .then((res) => res.data)
    .then((data) => res.send(data));
  console.log(`${req.query["search"]}`);
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
