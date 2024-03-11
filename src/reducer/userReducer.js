
function userReducer (initial, action) {
  
  switch (action.type) {
    case "SET_USER":
      return {
        ...initial,
        ...action?.payload
      }
    case "CLEAR_USER": null;
    default:
      return {
      ...initial
    }
  }
}


export default userReducer;