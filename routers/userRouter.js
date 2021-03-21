import express from "express";
import routes from "../routes"

const userRouter = express.Router();

function usersText(req,res){res.send("users");}
function usersDetailText(req,res){res.send("userDetail");}
function editProfileText(req,res){res.send("login");}
function changePasswordText(req,res){res.send("logout");}

userRouter.get(routes.users,usersText);
userRouter.get(routes.userDetail,usersDetailText);
userRouter.get(routes.editProfile,editProfileText);
userRouter.get(routes.changePassword,changePasswordText);

export default userRouter;