import express from "express";
import routes from "../routes"

const videoRouter = express.Router(); //앞에 export를 쓸 경우 하나만 export 하는 것 이다.

function videosText(req,res){res.send("videos");}
function uploadText(req,res){res.send("upload");}
function videoDetailText(req,res){res.send("videoDetail");}
function editVideoText(req,res){res.send("editVideo");}
function deleteVideoText(req,res){res.send("deleteVideo");}

videoRouter.get(routes.videos,videosText);
videoRouter.get(routes.upload,uploadText);
videoRouter.get(routes.videoDetail,videoDetailText);
videoRouter.get(routes.editVideo,editVideoText);
videoRouter.get(routes.deleteVideo,deleteVideoText);


export default videoRouter; //파일로 export한다는 것이다.