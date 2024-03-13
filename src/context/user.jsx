import { createContext, useReducer, useEffect } from "react";
import * as auth from "../api/auth";
import userReducer from "../reducer/userReducer";
import routesName from "../data/routesName";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();
export default UserContext;

export function UserProvider({ children }) {
  const navigate = useNavigate();
  const [ user, userDispatch ] = useReducer(userReducer, userReducer(null, { type: "GET_USER" }));
  async function onLoad() {
    const response = await auth.getMe();
    if (!response.ok) navigate(routesName.LOGIN);
    //else {
    userDispatch({ type: "SET_USER", payload: response?.data });
    //}
  }
  useEffect(() => {
    onLoad();
  }, [])
  return (
    <UserContext.Provider value={{
      user,
      userDispatch,
      name: "user context..."
    }}>
      {children}
    </UserContext.Provider>);

} 