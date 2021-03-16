const express = require("express");
const cors = require("cors");
// const { json } = require("body-parser");

const port = process.env.PORT || 3001;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  let Vimeo = require('vimeo').Vimeo;
  let client = new Vimeo(
    "24d7467f36afb8d8e9ce46b73d2b8c78595bb104",
    "QrLYalEjnvrwB25dBIXTLEdi5YG/XaqNcgv5TwFqpQl9zh8rOV/ajevqH2DxjQoAYa0YflRbB+x+3atpOV9l2GDVq+C9Tuncn+oH9wdig4d0c7FxiVGdadoIE96aIrlR",
    "1efc32639d8c4ab5996a9c3cad5ad1d4",
  );
  client.request({
    method: 'GET',
    path: '/me/projects/3869831/videos',
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