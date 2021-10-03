import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/shimYoutubeClone");

const db = mongoose.connection;

function handleOpen(){
    console.log("connected to DB");
}

function handleError(error){
    console.log("DB Error",error);
}


db.on("error",handleError);
db.once("open",handleOpen);