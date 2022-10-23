import { Router } from "express";
import launchController from "../controllers/launchController.js";

const launchRouter = Router();

launchRouter
  .get("/past", launchController.getPast)
  .get("/latest", launchController.getLatest)
  .get("/next", launchController.getNext)
  .get("/upcoming", launchController.getUpcoming)
  .get("/:id", launchController.getLaunchById);

export default launchRouter;
