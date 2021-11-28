import express from "express";
import { home } from "../controllers/rootController";
const cheerio = require('cheerio');
const request = require('request');

var url = "http://192.168.0.10/";

const rootRouter = express.Router();


rootRouter.get("/", home);

export default rootRouter;