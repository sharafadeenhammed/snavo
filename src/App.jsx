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

import { BrowserRouter as Router } from "react-router-dom"
import Navigation from "./Navigation"

function App() {

  return (
    <Router>
      <Navigation />
    </Router>
  )
}

export default App
