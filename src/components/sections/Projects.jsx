import React, { useState } from "react";
import styled from "styled-components";
import config from "../../data/siteConfig";
import ProjectCard from "../cards/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";

const Section = styled.section`
  display: flex; justify-content: center; padding: 100px 32px;
  background: ${({ theme }) => theme.bgAlt};
  border-top: 1px solid ${({ theme }) => theme.border};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  transition: background 0.35s, border-color 0.35s;
  @media (max-width: 768px) { padding: 64px 20px; }
  @media (max-width: 480px) { padding: 48px 16px; }
`;
const Container = styled.div` width: 100%; max-width: 1100px; `;

const SectionLabel = styled.p`
  font-size: 13px; font-weight: 500; color: ${({ theme }) => theme.c3};
  letter-spacing: 2px; text-transform: uppercase; margin-bottom: 16px;
  @media (max-width: 480px) { font-size: 11px; margin-bottom: 12px; }
`;
const Title = styled.h2`
  font-size: 36px; font-weight: 700; color: ${({ theme }) => theme.text};
  letter-spacing: -1px; margin-bottom: 32px;
  @media (max-width: 768px) { font-size: 28px; margin-bottom: 24px; }
  @media (max-width: 480px) { font-size: 24px; margin-bottom: 20px; }
`;

const FilterRow = styled.div`
  display: flex; gap: 6px; margin-bottom: 40px; flex-wrap: wrap;
  @media (max-width: 480px) { gap: 8px; margin-bottom: 24px; }
`;

const FilterButton = styled.button`
  padding: 7px 18px; font-size: 13px; font-weight: 500;
  font-family: "Inter", sans-serif; border-radius: 8px;
  cursor: pointer; transition: all 0.25s;
  -webkit-tap-highlight-color: transparent;
  border: 1px solid ${({ active, theme }) => active ? theme.c1 : theme.border};
  background: ${({ active, theme }) => active ? theme.c1 : theme.surface};
  color: ${({ active, theme }) => active ? "#fff" : theme.textSecondary};
  &:hover {
    border-color: ${({ active, theme }) => active ? theme.c1 : theme.borderHover};
    color: ${({ active, theme }) => active ? "#fff" : theme.text};
  }
  @media (max-width: 480px) { padding: 8px 16px; font-size: 12px; flex: 1; min-width: 0; text-align: center; }
`;

const Grid = styled(motion.div)`
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;
  @media (max-width: 960px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 600px) { grid-template-columns: 1fr; gap: 14px; }
`;

const sectionV = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } } };
const gridV = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } };
const cardV = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  const filtered = toggle === "all" ? config.projects : config.projects.filter((p) => p.category === toggle);

  return (
    <Section id="projects">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={sectionV}>
        <Container>
          <SectionLabel>Portfolio</SectionLabel>
          <Title>Projects</Title>
          <FilterRow>
            {["all", "web app", "android app", "machine learning"].map((cat) => (
              <FilterButton key={cat} active={toggle === cat} onClick={() => setToggle(cat)}>
                {cat === "all" ? "All" : cat === "web app" ? "Web" : cat === "android app" ? "Mobile" : "ML"}
              </FilterButton>
            ))}
          </FilterRow>
          <AnimatePresence mode="wait">
            <Grid key={toggle} initial="hidden" animate="visible" exit="hidden" variants={gridV}>
              {filtered.map((project) => (
                <motion.div key={project.id} variants={cardV}>
                  <ProjectCard project={project} setOpenModal={setOpenModal} />
                </motion.div>
              ))}
            </Grid>
          </AnimatePresence>
        </Container>
      </motion.div>
    </Section>
  );
};

export default Projects;
