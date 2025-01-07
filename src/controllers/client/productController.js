const productService = require('../../services/client/productService');

class ProductController {
  async getAllProducts(req, res) {
    //{{API_PREFIX-1}}api/products?sortField=price,discountPercentage&sortOrder=desc,asc&keyword=phone&page=2&limit=5
    try {
      const products = await productService.getAllProducts(req.query);
      res.status(200).json(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }


}

module.exports = new ProductController();
