import express from "express";
import testController from "../controllers/testController.js";

const testRouter = express.Router();


testRouter.route('/')
    .get(testController.test)
    .post()
    .delete()

export default testRouter;
