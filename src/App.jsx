import "./index.css"
import { BrowserRouter as Router } from "react-router-dom"
import Navigation from "./Navigation"
import BottomTabs from "./components/BottomTabs"
import { UserProvider } from "./context/user"


function App() {

  return (
    <UserProvider>
      <Router>
        <Navigation />
        <BottomTabs />
      </Router>
    </UserProvider>
  )
}

export default App
