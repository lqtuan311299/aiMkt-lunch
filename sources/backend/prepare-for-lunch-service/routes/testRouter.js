import express from 'express';
import dataLunch from '../controllers/testController.js';

const allDataLunch = express.Router();

allDataLunch
  .route('/')
  .get(dataLunch.getAllDataInFile)
  .post(dataLunch.postDataIntoFile);

export default allDataLunch;
