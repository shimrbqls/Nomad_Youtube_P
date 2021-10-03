import express from "express";
import morgan from "morgan";
import globalRouter from "./router/globalRouter.js";
import userRouter from "./router/userRouter.js";
import videoRouter from "./router/videoRouter.js";

const app = express();
const logger = morgan("dev");

app.set("views",process.cwd() + "/src/views");
app.set("view engine","pug");

app.use(logger);
app.use(express.urlencoded({extended: true}));
app.use("/",globalRouter);
app.use("/video",videoRouter);
app.use("/user",userRouter);

export default app;