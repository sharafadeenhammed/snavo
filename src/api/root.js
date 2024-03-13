import apisauce from "apisauce";

export const api = (baseURL, options = {}) => apisauce.create({ 
  baseURL: baseURL,
  ... options
 });

// writing post api call using fetch

const post = async function (url, data) {
  const responseObject = {
    ok: true,
    data: null
  }
  try {
  const response = await fetch( this.baseURL + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    
    },
    body: JSON.stringify(data || {}),
    credentials: "include",
    mode:"no-cors"
  });
    
  const resData = await response.json();
  console.log(resData);

    if (response.ok == false) {
      responseObject.ok = false;
      responseObject.data = {message: resData.message || "something went wrong"}
    }
    responseObject.resData = resData;
    return responseObject;

  } catch (error) {
    console.log(error);
    responseObject.ok = false;
    responseObject.data = { message: "network connection error" };
}
}

export const fetchApi = ( baseURL) => ( {
  baseURL: baseURL || "",
  post
}
)