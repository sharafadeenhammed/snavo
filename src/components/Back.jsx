import { FaArrowLeft } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
function Back() {
  const navigate = useNavigate();
  return (
    <FaArrowLeft size={20} onClick={() => navigate(-1)} />
  )
}

export default Back
