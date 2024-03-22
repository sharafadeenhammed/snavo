import { api } from "./root"
import * as constants from "../data/constants"
import userReducer from "../reducer/userReducer";

const request = api(constants.BASE_URL);
request.addAsyncRequestTransform(async (request) => {
  const data = userReducer(null, { type: "GET_USER" });
  request.headers[ "token" ] = data?.token || "";
  return request;
});

export const getRechageRecords = async (type) => {
  const response = await request.get(`/recharge/${type}`);
  return response;
}
