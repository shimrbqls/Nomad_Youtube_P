import express from "express";
import morgan from "morgan";
import globalRouter from "./router/globalRouter.js";
import userRouter from "./router/userRouter.js";
import videoRouter from "./router/videoRouter.js"

const app = express();
const logger = morgan("dev");

app.use(logger);

app.use("/",globalRouter);
app.use("/video",videoRouter);
app.use("/user",userRouter);

function handleListening(){
    console.log('Service listenting on port http://localhost:4000');
}

app.listen(4000,handleListening);