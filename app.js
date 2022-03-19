const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
const fs = require('fs').promises;
const port = 3000
let status = 'GREEN'

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('static'))
app.use("/",router);

router.get('/status', (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.json({ 'status': status });
});

router.get('/', (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.sendFile('views/index.html', {root: __dirname })
});

router.post('/status', (req, res) => {
status = req.body.status.toUpperCase();
console.log(req.body.status);
res.end('yes');
});

app.listen(port,() => {
console.log("Started on PORT " + port);
})