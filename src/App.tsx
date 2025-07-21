import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { French } from "./pages/French";
import { ThemeProvider } from "./context/ThemeContext";
import { English } from "./pages/English";
import { IndividuelTraining } from "./pages/IndividuelTraining";
import PageLoaderWrapper from "./components/PageLoaderWrapper";
import { EntrepriseTraining } from "./pages/EntrepriseTraining";
import { GroupTraining } from "./pages/GroupTraining";
import { ChildrenTraining } from "./pages/ChildrenTraining";
import { CoachingPage } from "./pages/Coaching";
import { Training } from "./pages/Training";
import { Examen } from "./pages/Examen";
import { ParticleBackground } from "./components/ParticleBackground";
function App() {
  return (
    <ThemeProvider>
      <Router> {/* <Router> en haut */}
        <ParticleBackground />
        <PageLoaderWrapper>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="/coaching" element={<CoachingPage />} />
              <Route path="/training" element ={<Training />} />
              <Route path="/french" element={<French />} />
              <Route path="/english" element={<English />} />
              <Route path="/entrepriseTraining" element={<EntrepriseTraining />} />
              <Route path="/individuelTraining" element={<IndividuelTraining />} />
              <Route path="/groupTraining" element={<GroupTraining />} />
              <Route path="/childrenTraining" element={<ChildrenTraining />} />
              <Route path="/examen" element={<Examen />} />
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
