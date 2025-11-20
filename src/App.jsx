import { BrowserRouter , Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import Userdetails from "./pages/Userdetails";

function App() {


  return (
    
    <BrowserRouter>
     

     
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<Userdetails />} />



        </Routes>
    
    </BrowserRouter>

  )
}

export default App
