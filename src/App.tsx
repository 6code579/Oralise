
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Contact } from "./pages/Contact"
import { Ourlang } from "./pages/Ourlang"
import { Services } from "./pages/Services"
import { About } from "./pages/About"
import { OurTraining } from "./pages/OurTraining"
import { ThemeProvider } from "./context/ThemeContext"

function App() {


  return (
    <>
    <ThemeProvider>
     <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/language" element={<Ourlang />} />
          <Route path="/training" element={<OurTraining />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
     </Router>
    </ThemeProvider>


    </>
  )
}

export default App
