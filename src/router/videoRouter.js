import express from "express";
import {home,search,getUpload,postUpload,see,getEdit,postEdit,deleteVideo} from "../controller/videoController.js";

const videoRouter = express.Router();

videoRouter.get("/upload",getUpload);
videoRouter.post("/upload",postUpload);
videoRouter.get("/:id(\\d+)",see);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.get("/:id(\\d+)/delete",deleteVideo);
videoRouter.get("/home",home);
videoRouter.get("/:id(\\d+)/search",search);

export default videoRouter;

