import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { EmailRounded, PhoneRounded } from "@mui/icons-material";
import config from "../../data/siteConfig";

const Section = styled.section`
  display: flex; justify-content: center; padding: 100px 32px;
  background: ${({ theme }) => theme.bgAlt};
  border-top: 1px solid ${({ theme }) => theme.border};
  position: relative; overflow: hidden;
  transition: background 0.35s, border-color 0.35s;
  @media (max-width: 768px) { padding: 64px 20px; }
  @media (max-width: 480px) { padding: 48px 16px; }
`;

const GradientOrb = styled.div`
  position: absolute; width: 500px; height: 500px; border-radius: 50%;
  background: radial-gradient(circle, ${({ theme }) => theme.c1Faint} 0%, transparent 70%);
  bottom: -200px; right: -150px; pointer-events: none;
  @media (max-width: 768px) { width: 300px; height: 300px; bottom: -150px; right: -100px; }
`;

const Container = styled.div`
  width: 100%; max-width: 540px; position: relative; z-index: 1;
`;

const SectionLabel = styled.p`
  font-size: 13px; font-weight: 500; color: ${({ theme }) => theme.c1};
  letter-spacing: 2px; text-transform: uppercase; margin-bottom: 16px;
  @media (max-width: 480px) { font-size: 11px; margin-bottom: 12px; }
`;
const Title = styled.h2`
  font-size: 36px; font-weight: 700; color: ${({ theme }) => theme.text};
  letter-spacing: -1px; margin-bottom: 10px;
  @media (max-width: 768px) { font-size: 28px; }
  @media (max-width: 480px) { font-size: 24px; }
`;
const Subtitle = styled.p`
  font-size: 15px; color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 28px; line-height: 1.6;
  @media (max-width: 480px) { font-size: 14px; margin-bottom: 24px; }
`;

const QuickContactRow = styled(motion.div)`
  display: flex; gap: 12px;
  @media (max-width: 560px) { flex-direction: column; }
`;

const ContactCard = styled.a`
  flex: 1;
  display: flex; align-items: center; gap: 14px;
  padding: 16px 20px;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  &:hover {
    border-color: ${({ hoverColor }) => hoverColor || "inherit"};
    background: ${({ hoverBg }) => hoverBg || "inherit"};
    transform: translateY(-2px);
    box-shadow: 0 8px 24px ${({ theme }) => theme.shadow};
  }
  @media (max-width: 480px) { padding: 14px 16px; gap: 12px; }
`;

const IconCircle = styled.div`
  width: 42px; height: 42px;
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  background: ${({ bg }) => bg || "rgba(255,255,255,0.06)"};
  color: #fff; flex-shrink: 0;
  @media (max-width: 480px) { width: 38px; height: 38px; border-radius: 8px; }
`;

const CardInfo = styled.div`
  display: flex; flex-direction: column; gap: 2px; min-width: 0; overflow: hidden;
`;

const CardLabel = styled.span`
  font-size: 11px; font-weight: 500; text-transform: uppercase;
  letter-spacing: 1px; color: ${({ theme }) => theme.textTertiary};
  @media (max-width: 480px) { font-size: 10px; }
`;

const CardValue = styled.span`
  font-size: 14px; font-weight: 500; color: ${({ theme }) => theme.text};
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  @media (max-width: 480px) { font-size: 13px; }
`;

const sectionV = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } } };
const cardStagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardV = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

const Contact = () => (
  <Section id="contact">
    <GradientOrb />
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={sectionV}>
      <Container>
        <SectionLabel>Let's connect</SectionLabel>
        <Title>Get in Touch</Title>
        <Subtitle>{config.contact.subtitle}</Subtitle>
        <QuickContactRow initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={cardStagger}>
          <motion.div variants={cardV} style={{ flex: 1 }}>
            <ContactCard href={`mailto:${config.contact.email}`} hoverColor="#3b82f6" hoverBg="rgba(59,130,246,0.06)">
              <IconCircle bg="#3b82f6"><EmailRounded style={{ fontSize: 20 }} /></IconCircle>
              <CardInfo><CardLabel>Email</CardLabel><CardValue>{config.contact.email}</CardValue></CardInfo>
            </ContactCard>
          </motion.div>
          <motion.div variants={cardV} style={{ flex: 1 }}>
            <ContactCard href={`tel:${config.contact.phone.replace(/\s/g, "")}`} hoverColor="#22c55e" hoverBg="rgba(34,197,94,0.06)">
              <IconCircle bg="#22c55e"><PhoneRounded style={{ fontSize: 20 }} /></IconCircle>
              <CardInfo><CardLabel>Phone</CardLabel><CardValue>{config.contact.phone}</CardValue></CardInfo>
            </ContactCard>
          </motion.div>
        </QuickContactRow>
      </Container>
    </motion.div>
  </Section>
);

export default Contact;
