import React from "react";
import styled, { keyframes } from "styled-components";
import config from "../../data/siteConfig";
import HeroImg from "../../images/HeroImage.jpg";
import { motion } from "framer-motion";

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
`;

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 72px 32px 64px;
  overflow: hidden;
  @media (max-width: 768px) { padding: 40px 20px 40px; }
  @media (max-width: 480px) { padding: 32px 16px 32px; }
`;

const GradientOrb1 = styled.div`
  position: absolute;
  width: 700px; height: 700px; border-radius: 50%;
  background: radial-gradient(circle, ${({ theme }) => theme.c1Faint} 0%, transparent 70%);
  top: -300px; right: -200px; pointer-events: none;
  @media (max-width: 768px) { width: 400px; height: 400px; top: -200px; right: -150px; }
`;

const GradientOrb2 = styled.div`
  position: absolute;
  width: 600px; height: 600px; border-radius: 50%;
  background: radial-gradient(circle, ${({ theme }) => theme.c2Faint} 0%, transparent 70%);
  top: -200px; left: -200px; pointer-events: none;
  @media (max-width: 768px) { width: 350px; height: 350px; top: -150px; left: -150px; }
`;

const TopLine = styled.div`
  position: absolute; top: 0; left: 50%; transform: translateX(-50%);
  width: 400px; height: 1px;
  background: linear-gradient(90deg, transparent, ${({ theme }) => theme.c1}, transparent);
  opacity: 0.3; pointer-events: none;
  @media (max-width: 768px) { width: 200px; }
  @media (max-width: 480px) { width: 140px; }
`;

const Container = styled.div`
  width: 100%; max-width: 720px;
  display: flex; flex-direction: column; align-items: center;
  text-align: center; gap: 24px;
  @media (max-width: 480px) { gap: 20px; }
`;

const AvatarWrapper = styled.div`
  position: relative; margin-bottom: 4px;
`;

const AvatarGlow = styled.div`
  position: absolute; inset: -16px; border-radius: 50%;
  background: radial-gradient(circle, ${({ theme }) => theme.c2Light} 0%, transparent 70%);
  pointer-events: none;
`;

const Avatar = styled.img`
  width: 130px; height: 130px; border-radius: 50%;
  object-fit: cover; border: 2px solid ${({ theme }) => theme.border};
  position: relative; z-index: 1; transition: border-color 0.3s;
  &:hover { border-color: ${({ theme }) => theme.c2}; }
  @media (max-width: 768px) { width: 110px; height: 110px; }
  @media (max-width: 480px) { width: 96px; height: 96px; }
`;

const StatusBadge = styled.div`
  display: inline-flex; align-items: center; gap: 8px;
  padding: 6px 14px; border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.c3Faint};
  background: ${({ theme }) => theme.c3Faint};
  @media (max-width: 480px) { padding: 5px 12px; }
`;

const StatusDot = styled.div`
  width: 6px; height: 6px; border-radius: 50%;
  background: ${({ theme }) => theme.c3};
  box-shadow: 0 0 8px ${({ theme }) => theme.c3};
  animation: ${pulse} 2s ease-in-out infinite;
`;

const StatusText = styled.span`
  font-size: 12px; font-weight: 500; color: ${({ theme }) => theme.c3};
  @media (max-width: 480px) { font-size: 11px; }
`;

const Name = styled.h1`
  font-size: 60px; font-weight: 800; letter-spacing: -2.5px;
  line-height: 1.05; color: ${({ theme }) => theme.text};
  @media (max-width: 768px) { font-size: 40px; letter-spacing: -1.5px; }
  @media (max-width: 480px) { font-size: 32px; letter-spacing: -1px; }
`;

const RoleText = styled.p`
  font-size: 17px; font-weight: 400; color: ${({ theme }) => theme.textTertiary};
  letter-spacing: -0.2px; margin-top: -8px;
  @media (max-width: 768px) { font-size: 15px; margin-top: -4px; }
  @media (max-width: 480px) { font-size: 13px; }
`;

const RoleHighlight = styled.span`
  color: ${({ theme }) => theme.c1};
`;

const Description = styled.p`
  font-size: 16px; font-weight: 400; color: ${({ theme }) => theme.textSecondary};
  line-height: 1.7; max-width: 540px;
  @media (max-width: 768px) { font-size: 14px; }
  @media (max-width: 480px) { font-size: 13px; line-height: 1.6; }
`;

const StatsRow = styled.div`
  display: flex; align-items: center; gap: 32px; padding: 16px 0 4px;
  @media (max-width: 768px) { gap: 24px; }
  @media (max-width: 480px) {
    display: grid; grid-template-columns: repeat(2, 1fr);
    gap: 16px; width: 100%; max-width: 280px;
  }
`;

const Stat = styled.div`
  display: flex; flex-direction: column; align-items: center; gap: 2px;
`;

const StatValue = styled.span`
  font-size: 22px; font-weight: 700;
  color: ${({ color, theme }) =>
    color === "c1" ? theme.c1 : color === "c2" ? theme.c2 : color === "c3" ? theme.c3 : theme.text};
  letter-spacing: -0.5px;
  @media (max-width: 480px) { font-size: 20px; }
`;

const StatLabel = styled.span`
  font-size: 12px; font-weight: 400; color: ${({ theme }) => theme.textFaint};
  text-transform: uppercase; letter-spacing: 1px;
  @media (max-width: 480px) { font-size: 10px; }
`;

const StatDivider = styled.div`
  width: 1px; height: 32px; background: ${({ theme }) => theme.border};
  @media (max-width: 480px) { display: none; }
`;

const ButtonGroup = styled.div`
  display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;
  @media (max-width: 480px) { width: 100%; }
`;

const PrimaryButton = styled.a`
  display: inline-flex; align-items: center; justify-content: center;
  padding: 11px 28px; font-size: 14px; font-weight: 500;
  font-family: "Inter", sans-serif; color: ${({ theme }) => theme.btnText};
  background: ${({ theme }) => theme.btnBg}; border-radius: 8px;
  text-decoration: none; cursor: pointer; transition: all 0.25s;
  -webkit-tap-highlight-color: transparent;
  &:hover { opacity: 0.85; transform: translateY(-1px); box-shadow: 0 4px 20px ${({ theme }) => theme.shadow}; }
  @media (max-width: 480px) { padding: 10px 20px; font-size: 13px; flex: 1; min-width: 0; }
`;

const ColorButton = styled.a`
  display: inline-flex; align-items: center; justify-content: center;
  padding: 11px 28px; font-size: 14px; font-weight: 500;
  font-family: "Inter", sans-serif; color: #fff;
  background: ${({ bg }) => bg || "#333"}; border: none; border-radius: 8px;
  text-decoration: none; cursor: pointer; transition: all 0.25s;
  -webkit-tap-highlight-color: transparent;
  &:hover { opacity: 0.85; transform: translateY(-1px); box-shadow: 0 4px 20px ${({ bg }) => bg ? bg + "40" : "rgba(0,0,0,0.3)"}; }
  @media (max-width: 480px) { padding: 10px 20px; font-size: 13px; flex: 1; min-width: 0; }
`;

const TechRow = styled.div`
  display: flex; align-items: center; gap: 8px;
  flex-wrap: wrap; justify-content: center; padding-top: 8px;
  @media (max-width: 480px) { gap: 6px; }
`;

const TechTag = styled.span`
  font-size: 12px; font-weight: 400; color: ${({ theme }) => theme.tagText};
  padding: 4px 12px; border: 1px solid ${({ theme }) => theme.tagBorder};
  border-radius: 6px; background: ${({ theme }) => theme.tagBg};
  transition: all 0.2s;
  &:hover { border-color: ${({ theme }) => theme.c1}; color: ${({ theme }) => theme.c1}; }
  @media (max-width: 480px) { font-size: 11px; padding: 3px 10px; }
`;

const ScrollHint = styled.div`
  margin-top: 24px; display: flex; flex-direction: column; align-items: center; gap: 8px;
  animation: ${float} 3s ease-in-out infinite;
  @media (max-width: 480px) { margin-top: 16px; }
`;

const ScrollText = styled.span`
  font-size: 11px; font-weight: 500; color: ${({ theme }) => theme.textFaint};
  text-transform: uppercase; letter-spacing: 2px;
`;

const ScrollLine = styled.div`
  width: 1px; height: 32px;
  background: linear-gradient(to bottom, ${({ theme }) => theme.textFaint}, transparent);
`;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const Hero = () => (
  <Section id="about">
    <GradientOrb1 />
    <GradientOrb2 />
    <TopLine />
    <Container>
      <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
        <AvatarWrapper><AvatarGlow /><Avatar src={config.hero.image || HeroImg} alt={config.hero.name} /></AvatarWrapper>
      </motion.div>
      <motion.div initial="hidden" animate="visible" custom={1} variants={fadeUp}>
        <StatusBadge><StatusDot /><StatusText>{config.hero.statusBadge}</StatusText></StatusBadge>
      </motion.div>
      <motion.div initial="hidden" animate="visible" custom={2} variants={fadeUp}>
        <Name>{config.hero.name}</Name>
      </motion.div>
      <motion.div initial="hidden" animate="visible" custom={3} variants={fadeUp}>
        <RoleText><RoleHighlight>{config.hero.tagline}</RoleHighlight> &middot; {config.hero.roles}</RoleText>
      </motion.div>
      <motion.div initial="hidden" animate="visible" custom={4} variants={fadeUp}>
        <Description>{config.hero.description}</Description>
      </motion.div>
      <motion.div initial="hidden" animate="visible" custom={5} variants={fadeUp} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <StatsRow>
          {config.hero.stats.map((s, i) => (
            <React.Fragment key={i}>
              {i > 0 && <StatDivider />}
              <Stat><StatValue color={s.color}>{s.value}</StatValue><StatLabel>{s.label}</StatLabel></Stat>
            </React.Fragment>
          ))}
        </StatsRow>
      </motion.div>
      <motion.div initial="hidden" animate="visible" custom={6} variants={fadeUp} style={{ width: "100%" }}>
        <ButtonGroup>
          {config.hero.buttons.map((btn, i) =>
            btn.type === "primary" ? (
              <PrimaryButton key={i} href={btn.url} target="_blank">{btn.label}</PrimaryButton>
            ) : btn.type === "color" ? (
              <ColorButton key={i} bg={btn.color} href={btn.url} target="_blank">{btn.label}</ColorButton>
            ) : null
          )}
        </ButtonGroup>
      </motion.div>
      <motion.div initial="hidden" animate="visible" custom={7} variants={fadeUp}>
        <TechRow>{config.hero.techStack.map((t) => <TechTag key={t}>{t}</TechTag>)}</TechRow>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}>
        <ScrollHint><ScrollText>Scroll</ScrollText><ScrollLine /></ScrollHint>
      </motion.div>
    </Container>
  </Section>
);

export default Hero;
