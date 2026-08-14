import {  Box } from "@chakra-ui/react"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import Navbar from "./component/Navbar"
import { Toaster } from "./components/ui/toaster"

function App() {
  return (
    <Box minH={"100vh"}>
      <Navbar/>
      <Toaster/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  )
}

export default App