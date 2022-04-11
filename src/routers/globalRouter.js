import express from "express";
import { join, login } from "../controllers/userController.js";
import { home, search } from "../controllers/videoController.js";

const gloablRouter = express.Router();

gloablRouter.get("/", home);
gloablRouter.get("/join", join);
gloablRouter.get("/login", login);
// gloablRouter.get("/search", search);

export default gloablRouter;
