
import { useContext, useEffect } from "react";
import UserContext from "../context/user";

function useUserContext() {
  const { user, userDispatch, name } = useContext(UserContext);
  useEffect(() => {
    
  }, [user])

  return {
    user,
    userDispatch,
    name
  }
}

export default useUserContext;