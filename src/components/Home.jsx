import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"

export default function Home() {
    const authInfo=useContext(AuthContext)
    console.log(authInfo)
  return (
    <div>Home</div>
  )
}
