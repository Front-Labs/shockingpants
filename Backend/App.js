const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 3001;
const app = express();

app.use(cors());

let Vimeo = require('vimeo').Vimeo;
  let client = new Vimeo(
    "24d7467f36afb8d8e9ce46b73d2b8c78595bb104",
    "QrLYalEjnvrwB25dBIXTLEdi5YG/XaqNcgv5TwFqpQl9zh8rOV/ajevqH2DxjQoAYa0YflRbB+x+3atpOV9l2GDVq+C9Tuncn+oH9wdig4d0c7FxiVGdadoIE96aIrlR",
    "1efc32639d8c4ab5996a9c3cad5ad1d4",
  );

//Featured Endpoint
app.get("/featured", (req, res) => {
  client.request({
    method: 'GET',
    path: '/me/projects/3933356/videos?fields=name,uri,pictures.sizes.link',
  }, function (error, body, status_code, headers) {
    if (error) {
      console.log(error);
    }
    res.send(body.data)
  });
});

//Portfolio Endpoint
app.get("/portfolio", (req, res) => {
  client.request({
    method: 'GET',
    path: '/me/projects/3869831/videos?fields=name,uri,pictures.sizes.link',
  }, function (error, body, status_code, headers) {
    if (error) {
      console.log(error);
    }
    res.send(body.data)
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});