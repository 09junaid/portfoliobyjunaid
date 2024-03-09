import {BrowserRouter, Routes,Route} from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Services } from "./pages/Services"
import { Contacts } from "./pages/Contacts"
import { Login } from "./pages/Login"
import { Logout } from "./pages/Logout"
import { Navbar } from "./components/Navbar"
import { Register } from "./pages/Register"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Unknown } from "./pages/Unknown"


export const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Services/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="/*" element={<Unknown/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}