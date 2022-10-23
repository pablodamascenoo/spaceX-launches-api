import axios from "axios";
import { launchConfig } from "../utils/launchUtils.js";

async function getLaunch(
  page: number,
  upcoming: boolean,
  limit: number,
  order: "asc" | "desc"
) {
  const config = launchConfig(upcoming, page, limit, order);

  try {
    const response = await axios.post(
      "https://api.spacexdata.com/v4/launches/query",
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
};
export default launchService;
