import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { Ourlang } from "./pages/Ourlang";
import { Services } from "./pages/Services";
import { About } from "./pages/About";
import { French } from "./pages/French";
import { OurTraining } from "./pages/OurTraining";
import { ThemeProvider } from "./context/ThemeContext";
import { English } from "./pages/English";
import { IndividuelTraining } from "./pages/IndividuelTraining";
import PageLoaderWrapper from "./components/PageLoaderWrapper";

function App() {
  return (
    <ThemeProvider>
      <Router> {/* <Router> en haut */}
        <PageLoaderWrapper>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/language" element={<Ourlang />} />
              <Route path="/french" element={<French />} />
              <Route path="/english" element={<English />} />
              <Route path="/training" element={<OurTraining />} />
              <Route path="/individuelTraining" element={<IndividuelTraining />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </PageLoaderWrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
