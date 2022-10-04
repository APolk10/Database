const db = require('../../db/connect');
const {Jobs} = require('../models');

const jobControllers = {
  // Create a new job
  newJob: (jobInfo) => (Jobs.create(jobInfo)),

  // Edit a job
  // editJob: (jobInfo) => (Jobs.findOneAndUpdate()),

  // Find all jobs
  getAllJobs: () => Jobs.find({}),

  // Find jobs published by a specific user

  // Find jobs assigned to specific employee

  // Update job so employer can assign to specific employee

  // Update job to change status to completed
}

module.exports = jobControllers;