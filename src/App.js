import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import ProjectDetails from "./components/Dialog/ProjectDetails";
import SideElements from "./components/SideElements";
import config from "./data/siteConfig";
import { useState, useEffect } from "react";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  width: 100%;
  overflow-x: hidden;
  position: relative;
  transition: background-color 0.35s, color 0.35s;
  padding-top: 64px;
  @media (max-width: 768px) { padding-top: 56px; }
`;

const GridOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image: radial-gradient(
    circle,
    ${({ theme }) => theme.dotColor} 1px,
    transparent 1px
  );
  background-size: 32px 32px;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const { sections, settings } = config;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : settings.defaultTheme === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Body>
          {settings.showGridOverlay && <GridOverlay />}
          {settings.showSideElements && <SideElements />}
          <Content>
            <Navbar toggleTheme={toggleTheme} isDark={isDark} />
            {sections.hero && <Hero />}
            {sections.skills && <Skills />}
            {sections.experience && <Experience />}
            {sections.projects && <Projects openModal={openModal} setOpenModal={setOpenModal} />}
            {sections.education && <Education />}
            {sections.contact && <Contact />}
            <Footer />
            {openModal.state && (
              <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
            )}
          </Content>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
