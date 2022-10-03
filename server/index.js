const express = require('express');
const cors = require('cors');
const db = require('../db/connect');
const controller = require('../db/controllers/jobs');
const model = require('../db/models');
const {Users, Reviews, Jobs, Tools} = model;

const app = express();

app.use(express.json());
app.use(cors());

app.post('/addjob', (req, res) => {
  console.log(req.body);
  res.send(req.body);
})

const port = 8080;

app.listen(port, console.log(`listening on port ${port}`));
