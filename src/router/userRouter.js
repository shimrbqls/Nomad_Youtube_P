import express from "express";
import {userSee,userLogout,userEdit,userDelete} from "../controller/userController.js"

const userRouter = express.Router();

userRouter.get("/logout",userLogout);
userRouter.get("/edit",userEdit);
userRouter.get("/delete",userDelete);
userRouter.get("/:id",userSee);

export default userRouter;

