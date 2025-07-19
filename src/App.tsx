import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { Services } from "./pages/Services";
import { About } from "./pages/About";
import { French } from "./pages/French";
import { ThemeProvider } from "./context/ThemeContext";
import { English } from "./pages/English";
import { IndividuelTraining } from "./pages/IndividuelTraining";
import PageLoaderWrapper from "./components/PageLoaderWrapper";
import { EntrepriseTraining } from "./pages/EntrepriseTraining";
import { GroupTraining } from "./pages/GroupTraining";
import { ChildrenTraining } from "./pages/ChildrenTraining";

function App() {
  return (
    <ThemeProvider>
      <Router> {/* <Router> en haut */}
        <PageLoaderWrapper>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/french" element={<French />} />
              <Route path="/english" element={<English />} />
              <Route path="/entrepriseTraining" element={<EntrepriseTraining />} />
              <Route path="/individuelTraining" element={<IndividuelTraining />} />
              <Route path="/groupTraining" element={<GroupTraining />} />
              <Route path="/childrenTraining" element={<ChildrenTraining />} />
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
