import Video from "../model/Video.js";

function exchangehashtags(method){
    method = method.split(",").map((word) => (word.startsWith("#") ? word : `#${word}`));
    return method;
}

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
            hashtags: exchangehashtags(hashtags),
        });
    await video.save();
    }
    catch(error){
        res.render("upload",{pageTitle: "upload Video",errorMessage: error._message,});
    }
    res.redirect("/video/home");
}

export async function see(req,res){
    const id = req.params.id;
    const video = await Video.findById(id);
    if (!video){
        res.render("404",{ pageTitle: " Video not found."});
    }
    res.render("watch",{pageTitle: video.title, video:video});
}

export async function getEdit(req,res){
    const id = req.params.id;
    const video = await Video.findById(id);
    if (!video){
        res.render("404",{ pageTitle: " Video not found."});
    }
    res.render("edit",{pageTitle: (`Edit : ${video.title}`), video:video});
}

export async function postEdit(req,res){
    const id = req.params.id;
    const {title, description, hashtags} = req.body;
    const video = await Video.findById(id);
    if (!video){
        res.render("404",{ pageTitle: " Video not found."});
    }
    await Video.findByIdAndUpdate(id,{
        title: title,
        description: description,
        hashtags: exchangehashtags(hashtags),
    })
    await video.save();
    res.redirect(`/video/${id}`);
}

export async function deleteVideo(req,res){
    const id = req.params.id;
    await Video.findByIdAndDelete(id);
    return res.redirect("/video/home");
}

export function search(req,res){
    res.send("deleteVideo");
}

