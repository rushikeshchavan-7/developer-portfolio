import React from "react";
import styled from "styled-components";
import config from "../../data/siteConfig";
import { motion } from "framer-motion";

const Section = styled.section`
  display: flex; justify-content: center; padding: 100px 32px;
  transition: background 0.35s;
  @media (max-width: 768px) { padding: 64px 20px; }
  @media (max-width: 480px) { padding: 48px 16px; }
`;
const Container = styled.div` width: 100%; max-width: 1100px; `;
const SectionLabel = styled.p`
  font-size: 13px; font-weight: 500; color: ${({ theme }) => theme.c1};
  letter-spacing: 2px; text-transform: uppercase; margin-bottom: 16px;
  @media (max-width: 480px) { font-size: 11px; margin-bottom: 12px; }
`;
const Title = styled.h2`
  font-size: 36px; font-weight: 700; color: ${({ theme }) => theme.text};
  letter-spacing: -1px; margin-bottom: 56px;
  @media (max-width: 768px) { font-size: 28px; margin-bottom: 40px; }
  @media (max-width: 480px) { font-size: 24px; margin-bottom: 32px; }
`;
const List = styled(motion.div)` display: flex; flex-direction: column; gap: 12px; `;

const Card = styled(motion.div)`
  padding: 28px;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px; transition: all 0.35s; cursor: default;
  &:hover {
    background: ${({ theme }) => theme.surfaceHover};
    border-color: ${({ theme }) => theme.borderHover};
    box-shadow: 0 8px 32px ${({ theme }) => theme.shadow};
    transform: translateY(-2px);
  }
  @media (max-width: 480px) { padding: 20px; border-radius: 12px; }
`;

const CardHeader = styled.div`
  display: flex; align-items: flex-start; gap: 16px; margin-bottom: 14px;
  @media (max-width: 480px) { gap: 12px; flex-wrap: wrap; }
`;

const Logo = styled.img`
  width: 44px; height: 44px; border-radius: 10px; object-fit: cover;
  border: 1px solid ${({ theme }) => theme.border}; flex-shrink: 0;
  @media (max-width: 480px) { width: 40px; height: 40px; border-radius: 8px; }
`;
const HeaderInfo = styled.div` flex: 1; min-width: 0; `;
const Role = styled.h3`
  font-size: 16px; font-weight: 600; color: ${({ theme }) => theme.text}; margin-bottom: 2px;
  @media (max-width: 480px) { font-size: 15px; }
`;
const Company = styled.p`
  font-size: 14px; font-weight: 400; color: ${({ theme }) => theme.textSecondary};
  @media (max-width: 480px) { font-size: 13px; }
`;
const DateBadge = styled.span`
  font-size: 12px; font-weight: 500; color: ${({ theme }) => theme.textTertiary};
  background: ${({ theme }) => theme.surface}; border: 1px solid ${({ theme }) => theme.border};
  padding: 4px 12px; border-radius: 100px; white-space: nowrap; flex-shrink: 0; height: fit-content;
  @media (max-width: 480px) { font-size: 11px; padding: 3px 10px; order: 3; width: 100%; text-align: center; margin-top: 4px; }
`;
const Desc = styled.p`
  font-size: 14px; font-weight: 400; line-height: 1.7; color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 14px; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
  @media (max-width: 480px) { font-size: 13px; -webkit-line-clamp: 4; }
`;
const SkillTags = styled.div` display: flex; flex-wrap: wrap; gap: 6px; `;
const SkillTag = styled.span`
  font-size: 12px; font-weight: 400;
  color: ${({ theme }) => theme.c2};
  background: ${({ theme }) => theme.c2Faint};
  padding: 4px 12px; border-radius: 6px;
  @media (max-width: 480px) { font-size: 11px; padding: 3px 10px; }
`;

const sectionV = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const cardV = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } } };

const Experience = () => (
  <Section id="experience">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={sectionV}>
      <Container>
        <SectionLabel>Career</SectionLabel>
        <Title>Experience</Title>
        <List initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}>
          {config.experiences.map((exp) => (
            <Card key={exp.id} variants={cardV}>
              <CardHeader>
                <Logo src={exp.img} alt={exp.company} />
                <HeaderInfo><Role>{exp.role}</Role><Company>{exp.company}</Company></HeaderInfo>
                <DateBadge>{exp.date}</DateBadge>
              </CardHeader>
              {exp.desc && <Desc>{exp.desc}</Desc>}
              {exp.skills && <SkillTags>{exp.skills.map((s, i) => <SkillTag key={i}>{s}</SkillTag>)}</SkillTags>}
            </Card>
          ))}
        </List>
      </Container>
    </motion.div>
  </Section>
);

export default Experience;
