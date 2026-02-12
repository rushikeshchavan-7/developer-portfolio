import { CloseRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { Modal } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  width: 100%; height: 100%; position: absolute; top: 0; left: 0;
  background: ${({ theme }) => theme.mode === "dark" ? "rgba(0,0,0,0.85)" : "rgba(0,0,0,0.5)"};
  backdrop-filter: blur(8px);
  display: flex; justify-content: center; overflow-y: auto;
  padding: 40px 16px;
  @media (max-width: 480px) { padding: 16px 12px; }
`;

const Wrapper = styled.div`
  max-width: 640px; width: 100%; height: min-content;
  background: ${({ theme }) => theme.mode === "dark" ? "#0a0a0a" : "#ffffff"};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 16px; padding: 28px; position: relative;
  @media (max-width: 480px) { padding: 20px 16px; border-radius: 12px; }
`;

const CloseButton = styled.div`
  position: absolute; top: 16px; right: 16px; cursor: pointer;
  color: ${({ theme }) => theme.textTertiary}; transition: color 0.2s; z-index: 1;
  -webkit-tap-highlight-color: transparent;
  padding: 4px;
  &:hover { color: ${({ theme }) => theme.text}; }
  @media (max-width: 480px) { top: 12px; right: 12px; }
`;

const Image = styled.img`
  width: 100%; object-fit: cover; border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.border}; margin-bottom: 24px;
  @media (max-width: 480px) { border-radius: 8px; margin-bottom: 16px; }
`;

const Title = styled.h2`
  font-size: 24px; font-weight: 700; color: ${({ theme }) => theme.text};
  letter-spacing: -0.5px; margin-bottom: 4px;
  padding-right: 36px;
  @media (max-width: 480px) { font-size: 20px; }
`;

const DateText = styled.p`
  font-size: 13px; color: ${({ theme }) => theme.textTertiary}; margin-bottom: 16px;
  @media (max-width: 480px) { font-size: 12px; margin-bottom: 12px; }
`;

const Tags = styled.div` display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 20px; `;

const Tag = styled.span`
  font-size: 12px; color: ${({ theme }) => theme.c2};
  background: ${({ theme }) => theme.c2Faint};
  padding: 4px 12px; border-radius: 6px;
  @media (max-width: 480px) { font-size: 11px; padding: 3px 10px; }
`;

const Desc = styled.p`
  font-size: 14px; line-height: 1.8; color: ${({ theme }) => theme.textSecondary}; margin-bottom: 24px;
  @media (max-width: 480px) { font-size: 13px; line-height: 1.7; margin-bottom: 20px; }
`;

const Label = styled.h3`
  font-size: 13px; font-weight: 600; color: ${({ theme }) => theme.textSecondary};
  text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;
`;

const Members = styled.div` display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px;
  @media (max-width: 480px) { margin-bottom: 20px; }
`;
const Member = styled.div` display: flex; align-items: center; gap: 10px; `;
const MemberImage = styled.img`
  width: 32px; height: 32px; object-fit: cover; border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.border};
`;
const MemberName = styled.span`
  font-size: 14px; font-weight: 500; color: ${({ theme }) => theme.text}; flex: 1;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  @media (max-width: 480px) { font-size: 13px; }
`;
const IconLink = styled.a`
  color: ${({ theme }) => theme.textTertiary}; text-decoration: none; display: flex;
  transition: color 0.2s; padding: 4px;
  -webkit-tap-highlight-color: transparent;
  &:hover { color: ${({ theme }) => theme.c1}; }
`;

const ButtonGroup = styled.div`
  display: flex; gap: 10px;
  @media (max-width: 480px) { flex-direction: column; }
`;

const Button = styled.a`
  flex: 1; text-align: center; font-size: 14px; font-weight: 500;
  font-family: "Inter", sans-serif; padding: 12px 16px;
  border-radius: 10px; text-decoration: none; cursor: pointer;
  transition: all 0.25s;
  -webkit-tap-highlight-color: transparent;
  color: ${({ primary }) => primary ? "#fff" : "inherit"};
  background: ${({ primary, theme }) => primary ? theme.c1 : theme.surface};
  border: 1px solid ${({ primary, theme }) => primary ? theme.c1 : theme.border};
  &:hover {
    transform: translateY(-1px);
    box-shadow: ${({ primary, theme }) => primary ? `0 4px 16px ${theme.c1Light}` : `0 4px 16px ${theme.shadow}`};
  }
  @media (max-width: 480px) { padding: 14px 16px; }
`;

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  return (
    <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
      <Overlay>
        <Wrapper>
          <CloseButton onClick={() => setOpenModal({ state: false, project: null })}><CloseRounded /></CloseButton>
          <Image src={project?.image} alt={project?.title} />
          <Title>{project?.title}</Title>
          <DateText>{project?.date}</DateText>
          <Tags>{project?.tags?.map((tag, i) => <Tag key={i}>{tag}</Tag>)}</Tags>
          <Desc>{project?.description}</Desc>
          {project?.member && (
            <>
              <Label>Team</Label>
              <Members>
                {project.member.map((member, i) => (
                  <Member key={i}>
                    <MemberImage src={member.img} alt={member.name} />
                    <MemberName>{member.name}</MemberName>
                    {member.github && <IconLink href={member.github} target="_blank"><GitHub fontSize="small" /></IconLink>}
                    {member.linkedin && <IconLink href={member.linkedin} target="_blank"><LinkedIn fontSize="small" /></IconLink>}
                  </Member>
                ))}
              </Members>
            </>
          )}
          <ButtonGroup>
            <Button href={project?.github} target="_blank">View Code</Button>
            <Button primary href={project?.webapp} target="_blank">Live Demo</Button>
          </ButtonGroup>
        </Wrapper>
      </Overlay>
    </Modal>
  );
};

export default ProjectDetails;
