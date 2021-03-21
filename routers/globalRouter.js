import express from "express";
import routes from "../routes";

const globalRouter = express.Router();

function homeText(req,res){res.send("HOME");}
function joinText(req,res){res.send("JOIN");}
function loginText(req,res){res.send("LOGIN");}
function logoutText(req,res){res.send("LOGOUT");}
function searchText(req,res){res.send("SEARCH");}

globalRouter.get(routes.home,homeText);
globalRouter.get(routes.join,joinText);
globalRouter.get(routes.login,loginText);
globalRouter.get(routes.logout,logoutText);
globalRouter.get(routes.search,searchText);

export default globalRouter;