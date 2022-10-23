import axios from "axios";
import { launchConfig, launchConfigById } from "../utils/launchUtils.js";

async function getLaunch(
  page: number,
  upcoming: boolean,
  limit: number,
  order: "asc" | "desc"
) {
  const config = launchConfig(upcoming, page, limit, order);

  try {
    const response = await axios.post(
      "https://api.spacexdata.com/v5/launches/query",
      config
    );
    const { data } = response;
    return data;
  } catch (error) {
    throw { status: 500, message: "server error" };
  }
}

async function getLaunchById(id: string) {
  const config = launchConfigById(id);

  try {
    const response = await axios.post(
      "https://api.spacexdata.com/v5/launches/query",
      config
    );
    const { data } = response;
    return data;
  } catch (error) {
    throw { status: 500, message: "server error" };
  }
}

const launchService = {
  getLaunch,
  getLaunchById,
};
export default launchService;
