import SelectTest from "../src/test"
import React from "react"

export default function About() {
    return (
        <div>
            <h1>test</h1>
            <React.StrictMode>
                <SelectTest num={15}></SelectTest>
            </React.StrictMode>
        </div>
    )
}