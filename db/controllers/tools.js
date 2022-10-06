const db = require('../../db/connect');
const {Tools} = require('../models');

const toolsControllers = {
  getTools: (tag) => Tools.find({category: tag})
}

module.exports = toolsControllers;