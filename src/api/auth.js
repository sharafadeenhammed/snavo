import {api} from "./root";
import * as constants from "../data/constants"
const request = api(constants.BASE_URL);

export const login = async (data) => {
  const response = await request.post("/auth/login", data);
  return response;
}

export const getMe = async () => {
  const response = await request.get("/auth/getme");
  return response;
}

export const register = async (data)=>{
  const response = await request.post("/auth/register");
  return response;
}

