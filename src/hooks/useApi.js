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
    if (!response.ok) {
      setError(true);
      if (response?.data?.message === undefined) response.data = {
        ...response.data,
        message:"Something went wrong try again"
      };
    }
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



