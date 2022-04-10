import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter.js";
import videoRouter from "./routers/videoRouter.js";
import userRouter from "./routers/userRouter.js";

const PORT = 4000;

const app = express();

const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
console.log(process.cwd());
app.use(logger);

app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);

const handleListening = () => console.log(`site : http://localhost:${PORT}`);

app.listen(PORT, handleListening);
