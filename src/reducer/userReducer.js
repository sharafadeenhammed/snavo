
function userReducer (initial, action) {
  
  switch (action.type) {
    case "SET_USER":
      localStorage.setItem("user", JSON.stringify(action?.payload));
      return {
        ...initial,
        ...action?.payload
      }
    case "CLEAR_USER": 
      localStorage.removeItem("user");
      return null
    
    case "GET_USER":
      const localStorageData = localStorage.getItem("user");
      if (localStorageData)
      return JSON.parse(localStorageData);
      return null 
    default:
      return {
      ...initial
    }
  }
}


export default userReducer;