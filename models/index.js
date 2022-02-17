const User = require("./User");
const Blog = require("./Blog");
const Comment = require("./Comment");

//user relationship user can have many blogs and can have many comments
User.hasMany(Blog, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

User.hasMany(Comment, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});
//blog relationship blogs are written by one user. and a blog can have many comments.
Blog.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Blog.hasMany(Comment, {
  foreignKey: "blogId",
  onDelete: "CASCADE",
});
//comments relationship comments are written by one user and they belong to one blog.
Comment.belongsTo(User, {
  foreignKey: "userId",
});

Comment.belongsTo(Blog, {
  foreignKey: "blogId",
});
module.exports = {
  User,
  Comment,
  Blog,
};
