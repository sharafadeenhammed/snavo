
import { useContext } from "react";
import UserContext from "../context/user";

function useUserContext() {
  const { user, userDispatch, name } = useContext(UserContext);

  return {
    user,
    userDispatch,
    name
  }
}

export default useUserContext;