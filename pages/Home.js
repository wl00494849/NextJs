import React from "react"
import stytle from "../styles/Home.module.css"
import Header from "../src/components/Header"

function Home() {
    return (
        <div>
            <div className={stytle.header}>
                <Header></Header>
            </div>
        </div>
    )
}

export default Home