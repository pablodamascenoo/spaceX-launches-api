import { Router } from "express";
import launchRouter from "./launchRouter.js";

const router = Router()

router.use(launchRouter)

export default router