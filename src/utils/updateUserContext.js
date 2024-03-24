

import userReducer from "../reducer/userReducer";
import * as auth from "../api/auth";


async function updateUserContext() {
  const response = await auth.getMe();
  if (!response.ok) return null
  return response.data;
}

export default updateUserContext;