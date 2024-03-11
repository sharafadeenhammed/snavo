import { createContext, useReducer, useEffect } from "react";
import * as auth from "../api/auth";
import userReducer from "../reducer/userReducer";
import routesName from "../data/routesName";

const UserContext = createContext();
export default UserContext;

export function UserProvider({ children }) {
  const [ user, userDispatch ] = useReducer(userReducer, null);
  async function onLoad() {
    const response = await auth.getMe();
    if (!response.ok) return history.pushState(null, "login", routesName.LOGIN);
    userDispatch({ type: "SET_USER", payload: response?.data?.user });
  }
  useEffect(() => {
    onLoad();
  }, [])
  return (
    <UserContext.Provider value={{
      user,
      userDispatch
    }}>
      {children}
    </UserContext.Provider>);

} 