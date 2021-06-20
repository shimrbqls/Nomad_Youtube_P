import express from "express";
import {Edit,Remove} from "../controller/userController.js"

const userRouter = express.Router();

userRouter.get("/Edit",Edit);
userRouter.get("/Remove",Remove);


export default userRouter;

