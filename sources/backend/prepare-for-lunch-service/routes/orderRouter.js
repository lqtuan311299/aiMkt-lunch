import express from 'express';
import order from '../controllers/orderController.js';

const orderApi = express.Router();

orderApi
  .route('/:orderId')
  .get(order.getAllOrder)
  .post(order.createOrder)
  .put(order.updateMultiOrder)
  .delete(order.deleteMultiOrder);

export default orderApi;
