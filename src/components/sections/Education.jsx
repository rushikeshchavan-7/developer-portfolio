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

const List = styled(motion.div)` display: flex; flex-direction: column; gap: 12px; `;

const Card = styled(motion.div)`
  padding: 28px;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px; transition: all 0.35s; cursor: default;
  &:hover {
    background: ${({ theme }) => theme.surfaceHover};
    border-color: ${({ theme }) => theme.borderHover};
    transform: translateY(-2px);
    box-shadow: 0 8px 32px ${({ theme }) => theme.shadow};
  }
  @media (max-width: 480px) { padding: 20px; border-radius: 12px; }
`;

const CardHeader = styled.div`
  display: flex; align-items: flex-start; gap: 16px;
  @media (max-width: 480px) { gap: 12px; flex-wrap: wrap; }
`;

const Logo = styled.img`
  width: 44px; height: 44px; border-radius: 10px; object-fit: cover;
  border: 1px solid ${({ theme }) => theme.border}; flex-shrink: 0;
  @media (max-width: 480px) { width: 40px; height: 40px; border-radius: 8px; }
`;
const HeaderInfo = styled.div` flex: 1; min-width: 0; `;
const School = styled.h3`
  font-size: 16px; font-weight: 600; color: ${({ theme }) => theme.text}; margin-bottom: 3px;
  @media (max-width: 480px) { font-size: 15px; }
`;
const Degree = styled.p`
  font-size: 14px; font-weight: 400; color: ${({ theme }) => theme.textSecondary}; margin-bottom: 4px;
  @media (max-width: 480px) { font-size: 13px; }
`;
const Grade = styled.p`
  font-size: 13px; font-weight: 500; color: ${({ theme }) => theme.c3};
  @media (max-width: 480px) { font-size: 12px; }
`;

const DateBadge = styled.span`
  font-size: 12px; font-weight: 500; color: ${({ theme }) => theme.textTertiary};
  background: ${({ theme }) => theme.surface}; border: 1px solid ${({ theme }) => theme.border};
  padding: 4px 12px; border-radius: 100px; white-space: nowrap; flex-shrink: 0; height: fit-content;
  @media (max-width: 480px) { font-size: 11px; padding: 3px 10px; order: 3; width: 100%; text-align: center; margin-top: 4px; }
`;

const sectionV = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardV = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } } };

const Education = () => (
  <Section id="education">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={sectionV}>
      <Container>
        <SectionLabel>Background</SectionLabel>
        <Title>Education</Title>
        <List initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={stagger}>
          {config.education.map((edu) => (
            <Card key={edu.id} variants={cardV}>
              <CardHeader>
                <Logo src={edu.img} alt={edu.school} />
                <HeaderInfo>
                  <School>{edu.school}</School>
                  <Degree>{edu.degree}</Degree>
                  <Grade>{edu.grade}</Grade>
                </HeaderInfo>
                <DateBadge>{edu.date}</DateBadge>
              </CardHeader>
            </Card>
          ))}
        </List>
      </Container>
    </motion.div>
  </Section>
);

export default Education;
