import React, { useState, useEffect } from "react";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import { MenuRounded, CloseRounded, DarkMode, LightMode } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import config from "../data/siteConfig";

const Nav = styled.nav`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  background: ${({ theme }) => theme.navBg};
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border-bottom: 1px solid ${({ theme }) => theme.border};
  transition: background 0.35s, border-color 0.35s, box-shadow 0.4s;

  @media (max-width: 768px) {
    height: 56px;
  }
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 480px) {
    padding: 0 16px;
  }
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`;

const NavLogo = styled(LinkR)`
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  letter-spacing: -0.3px;
  transition: opacity 0.2s;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover { opacity: 0.7; }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const LogoDot = styled.span`
  display: inline-block;
  width: 6px; height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.c1};
  margin-left: 2px;
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 28px;
  list-style: none;
  @media (max-width: 768px) { display: none; }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.textTertiary};
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s;
  letter-spacing: 0.2px;
  &:hover { color: ${({ theme }) => theme.text}; }

  @media (max-width: 768px) {
    font-size: 15px;
    padding: 8px 0;
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ThemeToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px; height: 36px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.surface};
  color: ${({ theme }) => theme.textSecondary};
  cursor: pointer;
  transition: all 0.25s;
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
  &:hover {
    border-color: ${({ theme }) => theme.borderHover};
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.surfaceHover};
  }
`;

const MobileIcon = styled.div`
  display: none;
  cursor: pointer;
  color: ${({ theme }) => theme.textSecondary};
  -webkit-tap-highlight-color: transparent;
  padding: 4px;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const MobileMenuWrapper = styled(motion.div)`
  position: fixed;
  top: 56px;
  left: 0; right: 0;
  background: ${({ theme }) => theme.navBg};
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding: 12px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 100;
  overflow: hidden;
`;

const navSections = [
  config.sections.hero && { id: "about", label: "About" },
  config.sections.skills && { id: "skills", label: "Skills" },
  config.sections.experience && { id: "experience", label: "Experience" },
  config.sections.projects && { id: "projects", label: "Projects" },
  config.sections.education && { id: "education", label: "Education" },
  config.sections.contact && { id: "contact", label: "Contact" },
].filter(Boolean);

const Navbar = ({ toggleTheme, isDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Nav style={{ boxShadow: scrolled ? `0 1px 20px ${isDark ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.06)"}` : "none" }}>
      <NavContainer>
        <NavLeft>
          <NavLogo to="/">{config.hero.name}<LogoDot /></NavLogo>
        </NavLeft>

        <NavItems>
          {navSections.map((sec) => (
            <NavLink key={sec.id} href={`#${sec.id}`}>
              {sec.label}
            </NavLink>
          ))}
        </NavItems>

        <NavRight>
          <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
            {isDark ? <LightMode style={{ fontSize: 18 }} /> : <DarkMode style={{ fontSize: 18 }} />}
          </ThemeToggle>
          <MobileIcon onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <CloseRounded /> : <MenuRounded />}
          </MobileIcon>
        </NavRight>

        <AnimatePresence>
          {isOpen && (
            <MobileMenuWrapper
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              {navSections.map((sec) => (
                <NavLink key={sec.id} onClick={() => setIsOpen(false)} href={`#${sec.id}`}>
                  {sec.label}
                </NavLink>
              ))}
            </MobileMenuWrapper>
          )}
        </AnimatePresence>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
