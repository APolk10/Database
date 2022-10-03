const express = require('express');
const cors = require('cors');
const db = require('../database/db');
const controller = require('../database/controllers/jobs');
const model = require('../database/models');
const {Users, Reviews, Jobs, Tools} = model;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/get', (req, res) => {
  res.send(controller.newJob());
})

const port = 8080;

app.listen(port, console.log(`listening on port ${port}`));
