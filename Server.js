require('dotenv').config()

const express = require("express")
const cors = require("cors")

const port = process.env.PORT || 3001
const app = express()

app.use(cors())

let Vimeo = require('vimeo').Vimeo;
  let client = new Vimeo(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.ACCESS_TOKEN
  );

//Featured Endpoint
app.get("/featured", (req, res) => {
  client.request({
    method: 'GET',
    path: '/me/projects/3933356/videos?fields=name,uri,pictures.sizes.link',
  }, function (error, body, status_code, headers) {
    if (error) {
      console.log(error)
    }
    res.send(body.data)
  });
});

//Portfolio Endpoint
app.get("/portfolio", (req, res) => {
  client.request({
    method: 'GET',
    path: '/me/projects/3869831/videos?fields=name,uri,description,pictures.sizes.link',
  }, function (error, body, status_code, headers) {
    if (error) {
      console.log(error)
    }
    res.send(body.data)
  });
});

app.listen(port, () => {
  console.log(`Server running at https://localhost:${port}`)
});