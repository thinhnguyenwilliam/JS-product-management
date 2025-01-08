const productService = require('../../services/admin/productService');
const { validationResult } = require('express-validator');

class ProductController {
  async getAllProducts(req, res) {
    //{{API_PREFIX-1}}api/admin/products?status=active&keyword=iPhone X 
    const products = await productService.getAllProducts(req.query);
    res.status(200).json(products);
  }


  async changeStatus(req, res) {
    //{{API_PREFIX-1}}api/admin/products/change-status
    const { id, status } = req.body;
    const result = await productService.changeStatus(id, status);
    res.status(200).json(result);
  }


  async changeMultiStatus(req, res) {
    try {
      const { ids, status } = req.body; // Extract data from request body
      const result = await productService.changeMultiStatus(ids, status); // Pass data to service
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to update statuses", error: error.message });
    }
  }


  async deleteProduct(req, res) {
    try {
      const { id } = req.params; // Get product ID from URL
      const result = await productService.deleteProduct(id);
      res.status(200).json(result); // Send response to client
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to delete product", error: error.message });
    }
  }

  async deleteMultipleProducts(req, res) {
    try {
      const { ids } = req.body; // Expect an array of product IDs
      const result = await productService.deleteMultipleProducts(ids);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to delete products", error: error.message });
    }
  }


  async getDeletedProducts(req, res) {
    try {
      const products = await productService.getDeletedProducts();
      res.status(200).json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to fetch deleted products", error: error.message });
    }
  }

  async restoreProduct(req, res) {
    try {
      const { id } = req.params;
      const result = await productService.restoreProduct(id);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to restore product", error: error.message });
    }
  }

  async changePosition(req, res) {
    try {
      const { id, newPosition } = req.body; // Expecting product ID and the new position
      const result = await productService.changePosition(id, newPosition);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: 'Failed to change position', error: error.message });
    }
  }

  async createProduct(req, res) {
    const result = await productService.createProduct();
    res.status(200).json(result);
  }

  async createPostProduct(req, res) {
    // Validate request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: 'Validation failed',
        errors: errors.array(),
      });
    }

    try {
      const productData = req.body;
      const result = await productService.createPostProduct(productData);
      res.status(200).json(result);

    } catch (error) {
      res.status(500).json({
        message: 'Failed to create product',
        error: error.message,
      });
    }
  }



}
module.exports = new ProductController();
