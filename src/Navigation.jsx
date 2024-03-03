import { useLocation, Route, Routes } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Login from "./screens/Login"
import Register from "./screens/Register"
import PrivacyPolicy from "./screens/PrivacyPolicy"
import ForgotPassword from "./screens/ForgotPassword"
import UserAgreement from "./screens/UserAgreement"
import routesName from "./data/routesName"
import Home from "./screens/Home"
import CompanyProfile from "./screens/CompanyProfile"
import PlatformRules from "./screens/PlatformRules"
import CommonProblem from "./screens/CommonProblem"
function Navigation() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path={routesName.HOME} element={<Home />} />
        <Route path={routesName.COMPANY_PROFILE} element={<CompanyProfile />} />
        <Route path={routesName.COMPANY_RULES} element={<PlatformRules />} />
        <Route path={routesName.COMMON_PROBLEM} element={<CommonProblem />} />


        <Route path={routesName.LOGIN} element={<Login />} />
        <Route path={routesName.REGISTER} element={<Register />} />
        <Route path={routesName.PRIVACY_POLICY} element={<PrivacyPolicy />} />
        <Route path={routesName.FORGOT_PASSWORD} element={<ForgotPassword />} />
        <Route path={routesName.USER_AGREEMENT} element={<UserAgreement />} />
      </Routes>

    </AnimatePresence>
  )
}

export default Navigation
