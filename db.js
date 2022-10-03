const mongoose = require('mongoose');

const db = async () => {
  try {
    const mongoose = (await import('mongoose')).default;
    await mongoose.connect('mongo successfully connected', { });
  } catch (error) {
    process.exit(1);
  }
}

// db.on('error', () => {
//   console.log('mongoose connection error');
// });

// db.once('open', () => {
//   console.log('mongoose connected successfully');
// });

module.exports = db;
