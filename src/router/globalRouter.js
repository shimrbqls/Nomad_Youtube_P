import express from "express";
import {home,homeJoin,homeLogin,homeSearch} from "../controller/homeController.js"

const globalRouter = express.Router();

globalRouter.get("/",home);
globalRouter.get("/join",homeJoin);
globalRouter.get("/login",homeLogin);
globalRouter.get("/search",homeSearch)

export default globalRouter;

