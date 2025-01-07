const dashboardRoutes = require('./dashboard.route');
const productRoutes = require('./product.route');
const systemConfig = require('../../config/constants');

const index = (app) => {
  const PATH_ADMIN = `/api/${systemConfig.prefixAdmin}`;

  // Mount the admin routes
  app.use(`${PATH_ADMIN}/dashboard`, dashboardRoutes);
  app.use(`${PATH_ADMIN}/products`, productRoutes);
};

module.exports = { index };
