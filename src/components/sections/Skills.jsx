import React from "react";
import styled from "styled-components";
import config from "../../data/siteConfig";
import { motion } from "framer-motion";

const Section = styled.section`
  display: flex; justify-content: center;
  padding: 100px 32px;
  background: ${({ theme }) => theme.bgAlt};
  border-top: 1px solid ${({ theme }) => theme.border};
  border-bottom: 1px solid ${({ theme }) => theme.border};
  transition: background 0.35s, border-color 0.35s;
  @media (max-width: 768px) { padding: 64px 20px; }
  @media (max-width: 480px) { padding: 48px 16px; }
`;

const Container = styled.div` width: 100%; max-width: 1100px; `;

const SectionLabel = styled.p`
  font-size: 13px; font-weight: 500; color: ${({ theme }) => theme.c2};
  letter-spacing: 2px; text-transform: uppercase; margin-bottom: 16px;
  @media (max-width: 480px) { font-size: 11px; margin-bottom: 12px; }
`;

const Title = styled.h2`
  font-size: 36px; font-weight: 700; color: ${({ theme }) => theme.text};
  letter-spacing: -1px; margin-bottom: 56px;
  @media (max-width: 768px) { font-size: 28px; margin-bottom: 40px; }
  @media (max-width: 480px) { font-size: 24px; margin-bottom: 32px; }
`;

const SkillGroup = styled.div`
  margin-bottom: 44px;
  &:last-child { margin-bottom: 0; }
  @media (max-width: 480px) { margin-bottom: 32px; }
`;

const GroupTitle = styled.h3`
  font-size: 12px; font-weight: 600; color: ${({ theme }) => theme.textTertiary};
  text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 20px;
  @media (max-width: 480px) { font-size: 11px; margin-bottom: 14px; }
`;

const TagList = styled(motion.div)` display: flex; flex-wrap: wrap; gap: 10px;
  @media (max-width: 480px) { gap: 8px; }
`;

const Tag = styled(motion.div)`
  display: inline-flex; align-items: center; gap: 10px;
  padding: 10px 18px; font-size: 14px; font-weight: 400;
  color: ${({ theme }) => theme.tagText};
  background: ${({ theme }) => theme.tagBg};
  border: 1px solid ${({ theme }) => theme.tagBorder};
  border-radius: 8px; transition: all 0.3s; cursor: default;
  &:hover {
    color: ${({ theme }) => theme.c1};
    border-color: ${({ theme }) => theme.c1};
    background: ${({ theme }) => theme.c1Faint};
    transform: translateY(-2px);
  }
  @media (max-width: 480px) { padding: 8px 14px; font-size: 13px; gap: 8px; }
`;

const TagIcon = styled.img` width: 20px; height: 20px;
  @media (max-width: 480px) { width: 18px; height: 18px; }
`;

const sectionV = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.03 } } };
const tagV = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } } };

const Skills = () => (
  <Section id="skills">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={sectionV}>
      <Container>
        <SectionLabel>Toolkit</SectionLabel>
        <Title>Skills & Technologies</Title>
        {config.skills.map((group, index) => (
          <SkillGroup key={index}>
            <GroupTitle>{group.title}</GroupTitle>
            <TagList initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}>
              {group.skills.map((item, idx) => (
                <Tag key={idx} variants={tagV}>
                  <TagIcon src={item.image} alt={item.name} />
                  {item.name}
                </Tag>
              ))}
            </TagList>
          </SkillGroup>
        ))}
      </Container>
    </motion.div>
  </Section>
);

export default Skills;
