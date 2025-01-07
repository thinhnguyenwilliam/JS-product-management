const express = require('express');
const productController = require('../../controllers/admin/productController');

const router = express.Router();

router.get('/', productController.getAllProducts);
router.patch('/change-status', productController.changeStatus);
router.patch('/change-multi-status', productController.changeMultiStatus);
router.delete('/:id', productController.deleteProduct);
router.delete('/delete-multiple', productController.deleteMultipleProducts);
router.get('/recycle-bin', productController.getDeletedProducts);
router.patch('/restore/:id', productController.restoreProduct);
router.patch('/change-position', productController.changePosition);

router.get('/create', productController.createProduct);
router.post('/create', productController.createPostProduct);



module.exports = router;
