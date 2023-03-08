import {NavLink, Outlet} from "react-router-dom"
import "./App.css"

export default function RootLayout() {

    return(
        <div className="root-layout">
            <section class="header">
                <div class = "buttons">
                    <button class="menu">≡</button>
                </div>
                <div class = "title">
                    <h1 id="title">Lotion</h1>
                    <p>Like Notion, but worse.</p>
                </div>
                <div class = "spacer">
                </div>
            </section>
            <hr></hr>
            <div className="App">
                <Outlet />
            </div>
        </div>
    )
}