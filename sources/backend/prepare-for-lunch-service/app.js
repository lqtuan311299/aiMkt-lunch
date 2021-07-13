import express from "express";
import testRouter from "./routes/testRouter.js";

const app = express();


//Middlewares

//Routes

//Catch errors

//Routes
app.use('/test', testRouter)

//Start server
const port = app.get('port') || 6969;
app.listen(port, () => console.log(`Server is listening on ${port}`));