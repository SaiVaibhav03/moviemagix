import React from "react"
import "./App.css"
import { CssBaseline } from "@mui/material"
import PageRoutes from "./routes/PageRoutes.jsx"

function App(){
    return(
        <>
            <CssBaseline />
            <PageRoutes />
        </>
    )
}

export default App