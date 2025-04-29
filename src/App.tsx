import { Routes, Route } from "react-router-dom"
import Index from "./pages/Index"
import DetailCountry from "./pages/DetailCountry"
import Navbar from "./components/Navbar"
import { useState } from "react"
import { Container } from "@mui/material"
export type Mode = "light" | "dark"

const App = () => {

    const [mode, setMode] = useState<Mode>("light")
    return (
       <Container sx={{ backgroundColor: mode === 'light' ? 'hsl(0, 0%, 98%)' : 'hsl(207, 26%, 17%)', minHeight: '100vh' }} disableGutters maxWidth={false}>
        <Navbar mode={mode} setMode={setMode}/>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/detail-country/:name" element={<DetailCountry mode={mode} />} />
            </Routes>
        </Container >
    )
}

export default App