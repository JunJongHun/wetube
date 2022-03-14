import express from "express";
import { join } from "../controllers/userController";
import { trending } from "../controllers/videoController";

const gloablRouter = express.Router();

gloablRouter.get("/", trending);
gloablRouter.get("/join", join);

export default gloablRouter;
