import "./db";
import "./models/Book";
import express from "express";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";
import bookRouter from "./routers/bookRouter";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.use("/", rootRouter);
app.use("/book", bookRouter);

export default app;