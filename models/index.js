const User = require("./User");
const Blog = require("./Blog");


User.hasMany(Blog, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});


Blog.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

module.exports = {
  User,
  Blog,
};
