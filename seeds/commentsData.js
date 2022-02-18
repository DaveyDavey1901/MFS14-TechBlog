const { Comment } = require('../models');

const commentsData = [
    {
        comments: "comment one one one",
        userId: 1,
        blogId: 1
    },
    {
        comments: "comment two two two",
        userId: 2,
        blogId: 2
    },
    {
        comments: "comment three three three",
        userId: 3,
        blogId: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentsData);

module.exports = seedComments;

