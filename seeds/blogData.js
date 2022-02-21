
const { Blog } = require('../models');

const blogdata = [
  {
    title: "HTML The Journey Begins",
    contents: "Everyone has to start somewhere for a coder its with HTML",
    datePosted: "2022/01/7",
    userId: 1,
  },
  {
    title: "CSS",
    contents: "Next in line is to make things look good with CSS",
    datePosted: "2022/01/9",
    userId: 2,
  },
  {
    title: "Javascript brings in the functionality",
    contents: "Now my brain is going to pickle with all the arrays, variables!",
    datePosted: "2022/02/7",
    userId: 3,
  },
  {
    title: "Figma a gem to work with",
    contents:
      "Figma is more than just a place to throw up a few wireframes. Its a full design tool where you can express your ideas and produce a finished design with prototype before getting into the code. making coding so much easier.",
    datePosted: "2022/02/19",
    userId: 4,
  },
];

const seedBlog = () => Blog.bulkCreate(blogdata);

module.exports = seedBlog;

