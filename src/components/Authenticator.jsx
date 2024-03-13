import { useContext, useEffect } from 'react'
import routesName from '../data/routesName'
import { useNavigate, useLocation } from 'react-router-dom'
import useUserContext from '../hooks/useUserContext'
import Navigation from '../Navigation'
import AuthNavigation from '../AuthNavigation'
function Authenticator() {
  const { user } = useUserContext();
  const location = useLocation();
  const navigate = useNavigate();
  const authRoutes = [
    routesName.USER_AGREEMENT,
    routesName.FORGOT_PASSWORD,
    routesName.PRIVACY_POLICY,
    routesName.REGISTER,
    routesName.LOGIN
  ]
  if ((user?.user?._id === undefined || user === null) && !authRoutes.includes(location.pathname)) {
    navigate(routesName.LOGIN)
  }


  if ((user?.user?._id === undefined || user === null) && !authRoutes.includes(location.pathname)) {
    navigate(routesName.LOGIN)
    return <AuthNavigation loginRoute={"/ "} />
  }
  else {
    if (user?.user?._id && authRoutes.includes(location.pathname)) navigate(routesName.HOME)
    return <Navigation />
  }

}

export default Authenticator
