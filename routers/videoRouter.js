import express from "express";
import { deleteVideo, editVideo, upload, videoDetail, videos } from "../controllers/videoController";
import routes from "../routes";

const videoRouter = express.Router(); //앞에 export를 쓸 경우 하나만 export 하는 것 이다.

videoRouter.get(routes.videos,videos);
videoRouter.get(routes.upload,upload);
videoRouter.get(routes.videoDetail,videoDetail);
videoRouter.get(routes.editVideo,editVideo);
videoRouter.get(routes.deleteVideo,deleteVideo);


export default videoRouter; //파일로 export한다는 것이다.