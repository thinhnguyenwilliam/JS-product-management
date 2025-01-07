const productRoutes = require('./product.route'); // Import the user route module
const homeRoutes = require('./home.route');

const index = (app) => {
  app.use('/api/products', productRoutes); // Prefix all user routes with `/api/users`

  app.use('/api', homeRoutes);
};

module.exports = { index };
