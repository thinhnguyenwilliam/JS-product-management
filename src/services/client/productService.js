const Product = require('../../models/productModel');

class ProductService {
  async getAllProducts(queryParams) {
    const { sortField, sortOrder, page, limit } = queryParams;

    // Initialize filter criteria
    const criteriaFilter = {
      status: "active",
      deleted: false
    };

    // Add filtering for optional fields
    if (queryParams.keyword) {
      criteriaFilter.title = { $regex: queryParams.keyword, $options: 'i' };
    }

    // Pagination logic
    const pageNumber = parseInt(page, 10) || 1;
    const pageLimit = parseInt(limit, 10) || 10;
    const skip = (pageNumber - 1) * pageLimit;

    // Sorting logic
    let sortOptions = {};
    if (sortField && sortOrder) {
      const sortFields = sortField.split(',');
      const sortOrders = sortOrder.split(',');
      sortFields.forEach((field, index) => {
        sortOptions[field] = sortOrders[index] === 'desc' ? -1 : 1;
      });
    }

    // Fetch products with criteria, pagination, and sorting
    const products = await Product.find(criteriaFilter)
      .sort(sortOptions)
      .skip(skip)
      .limit(pageLimit);

    // Total count for pagination
    const totalCount = await Product.countDocuments(criteriaFilter);

    return {
      pageTitle: "Danh Sách Sản Phẩm",
      totalCount,
      currentPage: pageNumber,
      totalPages: Math.ceil(totalCount / pageLimit),
      products,
    };
  }
}

module.exports = new ProductService();
