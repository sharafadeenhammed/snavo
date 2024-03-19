import { api } from "./root"
import userReducer from "../reducer/userReducer";
import * as constants from "../data/constants"




const request = api(constants.BASE_URL);

//  adding token to request header
request.addAsyncRequestTransform(async (request) => {
  const data = userReducer(null, { type: "GET_USER" });
  request.headers[ "token" ] = data?.token || "";
  return request;
});

export const getCoinAddress = async (data) => {
  const response = await request.get("/coin/get-payment-address", data);
  return response;
}

