import express from "express";
import { join, login } from "../controllers/userController.js";
import { trending, search } from "../controllers/videoController.js";

const gloablRouter = express.Router();

gloablRouter.get("/", trending);
gloablRouter.get("/join", join);
gloablRouter.get("/login", login);
// gloablRouter.get("/search", search);

export default gloablRouter;
