const { Comment } = require('../models');

const commentData = [{
        comment_text: "comment one one one",
        user_id: 1,
        blog_id: 1
    },
    {
        comment_text: "comment two two two",
        user_id: 2,
        blog_id: 2
    },
    {
        comment_text: "comment three three three",
        user_id: 3,
        blog_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;