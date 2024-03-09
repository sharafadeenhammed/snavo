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
import SecurityCenter from "./screens/SecurityCenter"
import UpdateLoginPassword from "./screens/UpdateLoginPassword"
import SetTransactionPassword from "./screens/SetTransactionPassword"
import BindMail from "./screens/BindMail"
import FundingDetails from "./screens/FundingDetails"
import InviteFriends from "./screens/InviteFriends"
import Quantization from "./screens/Quantization"
import MyTeam from "./screens/MyTeam"
import Quantify from "./screens/Quantify"
import App from "./App"
import BottomTabs from "./components/BottomTabs"
import QuantitativeRecords from "./screens/QuantitativeRecords"
import Profile from "./screens/Profile"
import TeamList from "./screens/TeamList"
import Miner from "./screens/Miner"
import MinerOrders from "./screens/MinerOrders"
import MinerDetails from "./screens/MinerDetails"
import TaskCenter from "./screens/TaskCenter"
import MessageCenter from "./screens/MessageCenter"
import MessageDetails from "./screens/MessageDetails"
import RechargeMethod from "./screens/RechargeMethod"
function Navigation() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        {/* <Route element={<App />} > */}
        <Route index={true} path={routesName.HOME} element={<Home />} />
        <Route path={routesName.COMPANY_PROFILE} element={<CompanyProfile />} />
        <Route path={routesName.COMPANY_RULES} element={<PlatformRules />} />
        <Route path={routesName.COMMON_PROBLEM} element={<CommonProblem />} />
        <Route path={routesName.SECURITY_CENTER} element={<SecurityCenter />} />
        <Route path={routesName.UPDATE_LOGIN_PASSWORD} element={<UpdateLoginPassword />} />
        <Route path={routesName.SET_TRANSACTION_PASSWORD} element={<SetTransactionPassword />} />
        <Route path={routesName.SET_MAIL} element={<BindMail />} />
        <Route path={routesName.FUNDING_DETAILS} element={<FundingDetails />} />
        <Route path={routesName.INVITE_FRIENDS} element={<InviteFriends />} />
        <Route path={routesName.QUANTIZIZATION} element={<Quantization />} />
        <Route path={routesName.MY_TEAM} element={<MyTeam />} />
        <Route path={routesName.QUANTIFY} element={<Quantify />} />
        <Route path={routesName.QUANTITATIVE_RECORDS} element={<QuantitativeRecords />} />
        <Route path={routesName.PROFILE} element={<Profile />} />
        <Route path={routesName.TEAM_LIST} element={<TeamList />} />
        <Route path={routesName.MINER} element={<Miner />} />
        <Route path={routesName.MINER_ORDERS} element={<MinerOrders />} />
        <Route path={routesName.MINER_DETAILS} element={<MinerDetails />} />
        <Route path={routesName.TASK_CENTER} element={<TaskCenter />} />
        <Route path={routesName.MESSAGE_CENTER} element={<MessageCenter />} />
        <Route path={routesName.MESSAGE_DETAILS + "/:id"} element={<MessageDetails />} />
        <Route path={routesName.RECHARGE_METHOD} element={<RechargeMethod />} />





        <Route path={routesName.LOGIN} element={<Login />} />
        <Route path={routesName.REGISTER} element={<Register />} />
        <Route path={routesName.PRIVACY_POLICY} element={<PrivacyPolicy />} />
        <Route path={routesName.FORGOT_PASSWORD} element={<ForgotPassword />} />
        <Route path={routesName.USER_AGREEMENT} element={<UserAgreement />} />
        {/* </Route> */}
      </Routes>

    </AnimatePresence>
  )
}

export default Navigation
