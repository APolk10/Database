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
  controller.newJob(req.body)
    .then(() => res.status(201).send('Job Added'))
    .catch((err) => res.status(400).send(err));
})

const port = 8080;

app.listen(port, console.log(`listening on port ${port}`));
