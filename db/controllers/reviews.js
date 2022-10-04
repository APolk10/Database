const db = require('../../db/connect');
const {Reviews} = require('../models');

const reviewsControllers = {
    getAllReviews: () => Reviews.find(),

    getFilteredReviews: () => Reviews.find(),

    addNewReview: (reviewInfo) => Reviews.create(reviewInfo),
}

module.exports = reviewsControllers;