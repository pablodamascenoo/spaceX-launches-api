import { Request, Response } from "express";
import launchService from "../services/launchService.js";

async function getPast(req: Request, res: Response) {
  const { page } = req.query;
  const pageNumber = page ? Number(page) : 1;
  const data = await launchService.getLaunch(pageNumber, false, 10, "asc");
  res.send(data);
}

async function getUpcoming(req: Request, res: Response) {
  const { page } = req.query;
  const pageNumber = page ? Number(page) : 1;
  const data = await launchService.getLaunch(pageNumber, true, 10, "asc");
  res.send(data);
}

async function getNext(req: Request, res: Response) {
  const data = await launchService.getLaunch(1, true, 1, "asc");
  res.send(data);
}

async function getLatest(req: Request, res: Response) {
  const data = await launchService.getLaunch(1, false, 1, "desc");
  res.send(data);
}

const launchController = {
  getLatest,
  getNext,
  getPast,
  getUpcoming,
};
export default launchController;
