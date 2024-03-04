import "./index.css"
import ForgotPassword from "./screens/ForgotPassword"
import Login from './screens/Login'
import PrivacyPolicy from "./screens/PrivacyPolicy"
import Register from './screens/Register'
import TestScreen from "./screens/TestScreen"
import UserAgreement from "./screens/UserAgreement"
import CountryPicker from "./components/CountryPicker"
import Screen from "./components/Screen"
import { useState, useEffect } from "react"
import Spinner from "./components/Spinner"
import ThinSpinner from "./components/ThinSpinner"

import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Navigation from "./Navigation"
import Home from "./screens/Home"
import Announcement from "./components/Announcement"
import LeftPanel from "./components/LeftPanel"
import BottomTabs from "./components/BottomTabs"
import SecurityCenter from "./screens/SecurityCenter"
import SetTransactionPassword from "./screens/SetTransactionPassword"
import UpdateLoginPassword from "./screens/UpdateLoginPassword"
import BindMail from "./screens/BindMail"
import FundingDetails from "./screens/FundingDetails"
import Quantization from "./screens/Quantization"
import MyTeam from "./screens/MyTeam"


function App() {

  return (
    <Router>
      <Navigation />
    </Router>
    // <Screen>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<MyTeam />} />
    //   </Routes>
    // </Router>
    // </Screen>
  )
}

export default App
