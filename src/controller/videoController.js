export function trending(req,res){
    const videos = [1,2,3,4,5,6,7,8,9,10];
    res.render("home", {pageTitle: "home", videos:videos});
}

export function see(req,res){
    res.render("watch");
}

export function edit(req,res){
    res.render("edit");
}

export function search(req,res){
    res.send("deleteVideo");
}

export function upload(req,res){
    res.send("upload");
}

export function deleteVideo(req,res){
    res.send("delete")
}
