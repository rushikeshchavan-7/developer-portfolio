import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px;
  overflow: hidden; cursor: pointer;
  transition: all 0.35s;
  height: 100%; display: flex; flex-direction: column;
  -webkit-tap-highlight-color: transparent;
  &:hover {
    border-color: ${({ theme }) => theme.borderHover};
    transform: translateY(-4px);
    box-shadow: 0 16px 48px ${({ theme }) => theme.shadow}, 0 0 0 1px ${({ theme }) => theme.border};
  }
  @media (max-width: 480px) { border-radius: 12px; }
`;

const ImageWrapper = styled.div`
  overflow: hidden; position: relative;
  &::after {
    content: ""; position: absolute; bottom: 0; left: 0; right: 0; height: 40px;
    background: linear-gradient(transparent, ${({ theme }) => theme.mode === "dark" ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.4)"});
    pointer-events: none;
  }
`;

const Image = styled.img`
  width: 100%; height: 200px; object-fit: cover;
  transition: transform 0.5s ease;
  ${Card}:hover & { transform: scale(1.05); }
  @media (max-width: 480px) { height: 180px; }
`;

const Content = styled.div`
  padding: 20px; flex: 1; display: flex; flex-direction: column;
  @media (max-width: 480px) { padding: 16px; }
`;

const CardTitle = styled.h3`
  font-size: 17px; font-weight: 600; color: ${({ theme }) => theme.text}; margin-bottom: 4px;
  @media (max-width: 480px) { font-size: 15px; }
`;

const DateText = styled.p`
  font-size: 12px; color: ${({ theme }) => theme.textTertiary}; margin-bottom: 10px;
  @media (max-width: 480px) { font-size: 11px; }
`;

const Desc = styled.p`
  font-size: 13px; line-height: 1.6; color: ${({ theme }) => theme.textSecondary};
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
  overflow: hidden; margin-bottom: 16px; flex: 1;
  @media (max-width: 480px) { font-size: 12px; margin-bottom: 12px; }
`;

const Tags = styled.div` display: flex; flex-wrap: wrap; gap: 6px; `;

const Tag = styled.span`
  font-size: 11px; color: ${({ theme }) => theme.c2};
  background: ${({ theme }) => theme.c2Faint};
  padding: 3px 10px; border-radius: 6px;
  @media (max-width: 480px) { font-size: 10px; padding: 2px 8px; }
`;

const ProjectCard = ({ project, setOpenModal }) => (
  <Card onClick={() => setOpenModal({ state: true, project })}>
    <ImageWrapper>
      <Image src={project.image} alt={project.title} />
    </ImageWrapper>
    <Content>
      <CardTitle>{project.title}</CardTitle>
      <DateText>{project.date}</DateText>
      <Desc>{project.description}</Desc>
      <Tags>
        {project.tags?.slice(0, 4).map((tag, i) => <Tag key={i}>{tag}</Tag>)}
        {project.tags?.length > 4 && <Tag>+{project.tags.length - 4}</Tag>}
      </Tags>
    </Content>
  </Card>
);

export default ProjectCard;
