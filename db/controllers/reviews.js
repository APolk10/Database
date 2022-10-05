const db = require('../../db/connect');
const {Reviews} = require('../models');

const reviewsControllers = {
    getAllReviews: () => Reviews.find(),

    getFilteredReviews: (categoryObj) => Reviews.find({categories: categoryObj.category}),

    addNewReview: (reviewInfo) => Reviews.create(reviewInfo),
}

module.exports = reviewsControllers;