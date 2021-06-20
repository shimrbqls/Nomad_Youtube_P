import express from "express";
import {Home,Join} from "../controller/userController.js"

const globalRouter = express.Router();

globalRouter.get("/",Home);
globalRouter.get("/join",Join);

export default globalRouter;

