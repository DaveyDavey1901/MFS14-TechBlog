const { Comment } = require('../models');

const commentsData = [
    {
        comments: "comment one one one",
        user_id: 1,
        blog_id: 1
    },
    {
        comments: "comment two two two",
        user_id: 2,
        blog_id: 2
    },
    {
        comments: "comment three three three",
        user_id: 3,
        blog_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentsData);

module.exports = seedComments;

