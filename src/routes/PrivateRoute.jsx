import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../Providers/AuthProvider"

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <span className="loading loading-spinner loading-xl"></span>
    }


    if (user?.email) {
        return children
    }

    return <Navigate to='/login'></Navigate>
}

export default PrivateRoute