const db = require('../../db/connect');
const {Jobs} = require('../models');

const jobControllers = {
  // Create a new job
  newJob: (jobInfo) => (Jobs.create(jobInfo)),

  // Edit a job
  editJob: (job, newInfo) => (Jobs.findOneAndUpdate(job, newInfo)),

  // Find all jobs
  getJobs: () => Jobs.find({}),

  // Find jobs published by a specific user
  userJobs: (user) => Jobs.find({client: user}),

  // Find jobs assigned to specific employee
  employeeJobs: (employee) => Jobs.find({assignedEmployee: employee}),

  // Update job so employer can assign to specific employee
  assignJob: (job, employee) => Jobs.findOneAndUpdate(job, employee),

  // Update job to change status to completed
  completeJob: (job, complete) => Jobs.findOneAndUpdate(job, complete)
}

module.exports = jobControllers;