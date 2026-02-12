import React, { useState, useEffect, useCallback, useRef } from "react";
import styled, { keyframes } from "styled-components";
import config from "../data/siteConfig";

const glow = keyframes`
  0%, 100% { filter: drop-shadow(0 0 2px currentColor); }
  50% { filter: drop-shadow(0 0 8px currentColor); }
`;

const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10;
  pointer-events: none;
  overflow: hidden;
  @media (max-width: 1080px) { display: none; }
`;

const ProgressRail = styled.div`
  position: absolute;
  left: 36px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60vh;
`;

const TrackBg = styled.div`
  position: absolute;
  width: 2px;
  height: 100%;
  background: ${({ theme }) => theme.border};
  border-radius: 2px;
`;

const TrackFill = styled.div`
  position: absolute;
  top: 0;
  width: 2px;
  border-radius: 2px;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.c1},
    ${({ theme }) => theme.c2},
    ${({ theme }) => theme.c3}
  );
  transition: height 0.25s ease-out;
  animation: ${glow} 3s ease-in-out infinite;
  color: ${({ theme }) => theme.c1};
`;

const SectionDot = styled.div`
  position: absolute;
  width: ${({ active }) => active ? "12px" : "8px"};
  height: ${({ active }) => active ? "12px" : "8px"};
  border-radius: 50%;
  background: ${({ active, theme }) => active ? theme.c1 : theme.border};
  border: 2px solid ${({ active, theme }) => active ? theme.c1 : "transparent"};
  box-shadow: ${({ active, theme }) => active ? `0 0 12px ${theme.c1}, 0 0 24px ${theme.c1}40` : "none"};
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
  cursor: pointer;
  pointer-events: auto;
`;

const SectionName = styled.span`
  position: absolute;
  left: 24px;
  font-size: 11px;
  font-weight: 600;
  font-family: "Inter", sans-serif;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: ${({ active, theme }) => active ? theme.c1 : "transparent"};
  white-space: nowrap;
  transition: all 0.35s ease;
  transform: ${({ active }) => active ? "translateX(0)" : "translateX(-8px)"};
  opacity: ${({ active }) => active ? 1 : 0};
  pointer-events: none;
`;

const SvgCanvas = styled.svg`
  position: absolute;
  right: 0;
  top: 0;
  width: 120px;
  height: 100%;
`;

const sections = [
  config.sections.hero && { id: "about", label: "About" },
  config.sections.skills && { id: "skills", label: "Skills" },
  config.sections.experience && { id: "experience", label: "Work" },
  config.sections.projects && { id: "projects", label: "Projects" },
  config.sections.education && { id: "education", label: "Education" },
  config.sections.contact && { id: "contact", label: "Contact" },
].filter(Boolean);

const nodeConfig = [
  { baseY: 0.08, baseX: 60,  r: 4,  color: "c1" },
  { baseY: 0.16, baseX: 90,  r: 3,  color: "c2" },
  { baseY: 0.24, baseX: 40,  r: 5,  color: "c3" },
  { baseY: 0.32, baseX: 75,  r: 3,  color: "c1" },
  { baseY: 0.40, baseX: 50,  r: 4,  color: "c2" },
  { baseY: 0.48, baseX: 85,  r: 3,  color: "c3" },
  { baseY: 0.56, baseX: 35,  r: 5,  color: "c1" },
  { baseY: 0.64, baseX: 70,  r: 3,  color: "c2" },
  { baseY: 0.72, baseX: 55,  r: 4,  color: "c3" },
  { baseY: 0.80, baseX: 95,  r: 3,  color: "c1" },
  { baseY: 0.88, baseX: 45,  r: 4,  color: "c2" },
  { baseY: 0.95, baseX: 80,  r: 3,  color: "c3" },
];

const connections = [
  [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],
  [6,7],[7,8],[8,9],[9,10],[10,11],
  [0,2],[1,3],[2,4],[4,6],[5,7],[6,8],[7,9],[8,10],[9,11],
  [0,3],[3,6],[6,9],[2,5],[5,8],[8,11],
];

const SideElements = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [vpH, setVpH] = useState(1);
  const rafRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const sy = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollY(sy);
      setScrollPercent(docH > 0 ? sy / docH : 0);
      setVpH(window.innerHeight);

      let found = 0;
      sections.forEach((sec, i) => {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) found = i;
        }
      });
      setActiveSection(found);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const computedNodes = nodeConfig.map((n, i) => {
    const wave = Math.sin(scrollY * 0.001 + i * 0.8) * 12;
    const parallax = scrollY * (i % 2 === 0 ? -0.015 : 0.01);
    const x = n.baseX + wave;
    const y = n.baseY * vpH + parallax;
    /* opacity: brighter when scroll is near this node's region */
    const nodeRegion = n.baseY;
    const dist = Math.abs(scrollPercent - nodeRegion);
    const opacity = Math.max(0.15, 0.6 - dist * 1.2);
    return { ...n, x, y, opacity };
  });

  return (
    <Wrapper>
      <ProgressRail>
        <TrackBg />
        <TrackFill style={{ height: `${scrollPercent * 100}%` }} />
        {sections.map((sec, i) => {
          const pos = sections.length <= 1 ? 50 : (i / (sections.length - 1)) * 100;
          const isActive = activeSection === i;
          return (
            <React.Fragment key={sec.id}>
              <SectionDot
                active={isActive}
                style={{ top: `${pos}%`, transform: "translate(-50%, -50%)" }}
                onClick={() => scrollTo(sec.id)}
              />
              <SectionName
                active={isActive}
                style={{ top: `${pos}%`, transform: `translateY(-50%) translateX(${isActive ? 0 : -8}px)` }}
              >
                {sec.label}
              </SectionName>
            </React.Fragment>
          );
        })}
      </ProgressRail>

      <SvgCanvas viewBox={`0 0 120 ${vpH}`} preserveAspectRatio="none">
        {connections.map(([a, b], i) => {
          const nA = computedNodes[a];
          const nB = computedNodes[b];
          const avgOpacity = (nA.opacity + nB.opacity) / 2 * 0.5;
          return (
            <line
              key={i}
              x1={nA.x} y1={nA.y}
              x2={nB.x} y2={nB.y}
              stroke={
                nA.color === "c1" ? "#3b82f6" :
                nA.color === "c2" ? "#8b5cf6" : "#10b981"
              }
              strokeWidth="0.8"
              strokeOpacity={avgOpacity}
            />
          );
        })}
        {computedNodes.map((n, i) => (
          <circle
            key={i}
            cx={n.x} cy={n.y} r={n.r}
            fill={
              n.color === "c1" ? "#3b82f6" :
              n.color === "c2" ? "#8b5cf6" : "#10b981"
            }
            opacity={n.opacity}
          />
        ))}
        {computedNodes.map((n, i) => (
          n.opacity > 0.4 ? (
            <circle
              key={`ring-${i}`}
              cx={n.x} cy={n.y} r={n.r + 6}
              fill="none"
              stroke={
                n.color === "c1" ? "#3b82f6" :
                n.color === "c2" ? "#8b5cf6" : "#10b981"
              }
              strokeWidth="0.5"
              opacity={n.opacity * 0.4}
            />
          ) : null
        ))}
      </SvgCanvas>
    </Wrapper>
  );
};

export default SideElements;
