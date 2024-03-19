import Screen from "../components/Screen"
import pageAnimation from "../data/pageAnimation"
import routeName from "../data/routesName"
import { Link } from "react-router-dom"
function PageNotFound() {
  return (
    <Screen
      {...pageAnimation}
      objectStyle={{
        padding: 0,
        paddingTop: "50px"
      }}
    >
      <div className="w-full h-full flex justify-center" >
        <p className="text-white text-lg">404 | page not found</p>
        <Link className="outline-none text-white border-2 border-white rounded-lg px-2 py-1 ml-2" to={routeName.HOME}  >
          go back home
        </Link>
      </div>

    </Screen>
  )
}

export default PageNotFound
