const db = require('../../db/connect');
const {Jobs} = require('../models');

const jobControllers = {
  // Create a new job
  newJob: (jobInfo) => {
    Jobs.create(jobInfo);
    console.log('it works!')
  },

  // Edit a job

  // Find all jobs

  // Find jobs published by a specific user

  // Find jobs assigned to specific employee

  // Update job so employer can assign to specific employee

  // Update job to change status to completed
}

module.exports = jobControllers;