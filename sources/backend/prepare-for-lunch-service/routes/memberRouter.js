import express from 'express';
import member from '../controllers/memberController.js';

const memberApi = express.Router();

memberApi.route('/').get(member.getAllMember).put(member.updateMultiMember);

export default memberApi;
