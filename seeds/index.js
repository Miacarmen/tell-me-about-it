const sequelize = require("../config/connection");
const seedUser = require("./userData");
const seedBlogPost = require("./blogpostData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedBlogPost();

  process.exit(0);
};

seedAll();
