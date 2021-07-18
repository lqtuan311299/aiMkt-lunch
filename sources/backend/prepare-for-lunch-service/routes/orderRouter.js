import express from 'express';
import order from '../controllers/orderController.js';

const orderApi = express.Router();

orderApi
    .route('/:orderId')
    .get(order.getOneOrder)
    .put(order.updateOneOrder)
    .delete(order.deleteOneOrder);

orderApi.route('/').get(order.getAllOrder).post(order.createOrder);

export default orderApi;
