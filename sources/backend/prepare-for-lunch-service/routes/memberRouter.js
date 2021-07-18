import express from 'express';
import member from '../controllers/memberController.js';

const memberApi = express.Router();

memberApi
  .route('/:shortName')
  .get(member.getAllMember)
  .post(member.createMember)
  .put(member.updateMultiMember)
  .delete(member.deleteMultiMember);

export default memberApi;
