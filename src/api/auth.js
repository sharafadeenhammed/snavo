import {api, fetchApi as fetch} from "./root";
import * as constants from "../data/constants"
import userReducer from "../reducer/userReducer";
const request = api(constants.BASE_URL);

//  adding token to request header
request.addAsyncRequestTransform(async (request) => {
  const data = userReducer(null, { type: "GET_USER" });
  request.headers["token"] = data?.token || "";

  return request
})

export const login = async (data) => {
  // const response = await fetchApi.post("/auth/login", data);
  const response = await request.post("/auth/login", data);
  return response;
}

export const getMe = async () => {
  const response = await request.get("/auth/getme");
  return response;
}

export const register = async (data)=>{
  const response = await request.post("/auth/register", data);
  return response;
}

export const requestPasswordResetToken =  async (data)=>{
  const response = await request.post("/auth/get-token", data);
  return response;
}

