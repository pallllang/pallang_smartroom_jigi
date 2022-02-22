import express from "express";
import { home, watch, getEdit, postEdit, deleteBook, getUpload, postUpload} from "../controllers/bookController";

const bookRouter = express.Router();

bookRouter.get("/", home);
bookRouter.get("/:id([0-9a-f]{24})", watch);
bookRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
bookRouter.route("/:id([0-9a-f]{24})/delete").get(deleteBook);
bookRouter.route("/upload").get(getUpload).post(postUpload);

export default bookRouter;