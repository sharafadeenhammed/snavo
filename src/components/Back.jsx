import { FaArrowLeft } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
function Back({ color = "#FFFFFF" }) {
  const navigate = useNavigate();
  return (
    <FaArrowLeft color={color} size={20} onClick={() => navigate(-1)} />
  )
}

export default Back
