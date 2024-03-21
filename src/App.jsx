import "./index.css"
import { BrowserRouter, HashRouter as Router } from "react-router-dom"
import BottomTabs from "./components/BottomTabs"
import { UserProvider } from "./context/user"
import Authenticator from "./components/Authenticator"


function App() {

  return (
    <Router>
      <UserProvider>
        <Authenticator />
        <BottomTabs />
      </UserProvider>
    </Router>



  )
}

export default App
