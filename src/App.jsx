import "./index.css"
import { BrowserRouter as Router } from "react-router-dom"
import Navigation from "./Navigation"
import BottomTabs from "./components/BottomTabs"
import { UserProvider } from "./context/user"
import Authenticator from "./components/Authenticator"


function App() {

  return (
    <Router>
      <UserProvider>
        {/* <Navigation /> */}
        <BottomTabs />
        <Authenticator />
      </UserProvider>
    </Router>
  )
}

export default App
