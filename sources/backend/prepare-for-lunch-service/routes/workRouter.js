import express from 'express';
import work from '../controllers/workController.js';

const workApi = express.Router();

workApi.route('/').put(work.updateMultiWork).get(work.getAllWork);

export default workApi;
