import Video from "../model/Video.js";

function handleSearch (error,video){
    console.log("errors",error);
    console.log("videos",video);
}

export async function home (req,res){
    const videoData = await Video.find({});
    res.render("home", {pageTitle: "home", videos:videoData});
}

export function getUpload (req,res){
    res.render("upload",{pageTitle: "upload Video"});
}

export async function postUpload (req,res){
    const {title, description, hashtags} = req.body;
    try{
    const video = new Video({
            title: title,
            description: description,
            hashtags: hashtags.split(",").map((word) => `#${word}`),
        });
    await video.save();
    }
    catch(error){
        res.render("upload",{pageTitle: "upload Video",errorMessage: error._message,});
    }
    res.redirect("/video/home");
}

export function see(req,res){
    const id = req.params.id;
    console.log(id);
    res.render("watch",{pageTitle: `Watching`, views:view});
}

export function getEdit(req,res){
    const id = req.params.id;
    res.render("getEdit",{pageTitle: `edit`});
}

export function postEdit(req,res){
    const id = req.params.id;
    const title = req.body.title;
    res.redirect(`/video/${id}`);
}

export function search(req,res){
    res.send("deleteVideo");
}

export function upload(req,res){
    res.render("upload");
}

export function deleteVideo(req,res){
    res.send("delete")
}
