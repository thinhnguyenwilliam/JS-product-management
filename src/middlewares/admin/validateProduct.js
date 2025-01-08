const { body } = require('express-validator');
const productController = require('../../controllers/admin/productController');

// Validation middleware
const validateProductCreation = [
    body('title')
        .notEmpty()
        .withMessage('Title is required')
        .isLength({ min: 3 })
        .withMessage('Title must be at least 3 characters long'),
    body('price')
        .notEmpty()
        .withMessage('Price is required')
        .isFloat({ min: 0 })
        .withMessage('Price must be a positive number'),
    body('stock')
        .notEmpty()
        .withMessage('Stock is required')
        .isInt({ min: 0 })
        .withMessage('Stock must be a non-negative integer'),
    body('thumbnail')
        .notEmpty()
        .withMessage('Thumbnail URL is required')
        .isURL()
        .withMessage('Thumbnail must be a valid URL'),
    body('status')
        .optional()
        .isIn(['active', 'inactive'])
        .withMessage('Status must be "active" or "inactive"'),
];

module.exports = validateProductCreation;
