import express from "express";
import {trending,search,upload,see,edit,deleteVideo} from "../controller/videoController.js";

const videoRouter = express.Router();

videoRouter.get("/upload",upload);
videoRouter.get("/:id(\\d+)",see);
videoRouter.get("/:id(\\d+)/edit",edit);
videoRouter.get("/:id(\\d+)/delete",deleteVideo);
videoRouter.get("/trending",trending);
videoRouter.get("/:id(\\d+)/search",search);

export default videoRouter;

