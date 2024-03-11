import { useState } from "react";


const useApi = (apiCall) => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ data, setData ] = useState(null);
  const [ error, setError ] = useState(false);
  async function callApi(...data) {
    setIsLoading(true);
    setError(false);
    setData(null);
    const response = await apiCall(...data);
    console.log("response from useApi", response);
    if (!response.ok) setError(true);
    setData(response.data);
    setIsLoading(false);
    return response;
  }

  return {
    isLoading,
    data,
    error,
    callApi,
    setError
  };
}

export default useApi;



