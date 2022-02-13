
const { Blog } = require('../models');

const blogdata = [
  {
    title: "HTML The Journey Begins",
    contents: "Everyone has to start somewhere for a coder its with HTML",
    userId: 1
  },
  {
    title: "CSS",
    contents: "Next in line is to make things look good with CSS",
    userId: 2
  },
  {
    title: "Javascript brings in the functionality",
    contents: "Now my brain is going to pickle with all the arrays, variables!",
    userId: 3
  }
]

const seedBlog = () => Blog.bulkCreate(blogdata);

module.exports = seedBlog;

