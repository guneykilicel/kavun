
import { useEffect } from "react"
import { logout } from "../firebase.js"

export default function Logout() {
    useEffect(()=>{
        logout()
    }, [])
    return null
}