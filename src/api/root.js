import apisauce from "apisauce";

export const api = (baseURL) => apisauce.create({ baseURL });
