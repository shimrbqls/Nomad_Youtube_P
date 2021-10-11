import express from "express";
import {home,search,getUpload,postUpload,see,getEdit,postEdit,deleteVideo} from "../controller/videoController.js";

const videoRouter = express.Router();

videoRouter.get("/upload",getUpload);
videoRouter.post("/upload",postUpload);
videoRouter.get("/:id([0-9a-f]{24})",see);
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
videoRouter.get("/:id([0-9a-f]{24})/delete",deleteVideo);
videoRouter.get("/home",home);
videoRouter.get("/:id([0-9a-f]{24})/search",search);

export default videoRouter;

