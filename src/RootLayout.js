import {Outlet} from "react-router-dom"
import "./App.css"

export default function RootLayout() {
    return(
        <div className="root-layout">
            <Outlet />
        </div>
    )
}