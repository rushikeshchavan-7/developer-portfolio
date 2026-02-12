import React from "react";
import styled from "styled-components";
import config from "../../data/siteConfig";

const FooterSection = styled.footer`
  display: flex; justify-content: center; padding: 40px 32px;
  border-top: 1px solid ${({ theme }) => theme.border};
  transition: border-color 0.35s;
  @media (max-width: 480px) { padding: 32px 16px; }
`;

const Container = styled.div`
  width: 100%; max-width: 1100px; display: flex;
  align-items: center; justify-content: space-between;
  @media (max-width: 600px) { flex-direction: column; gap: 20px; text-align: center; }
`;

const Left = styled.div` display: flex; flex-direction: column; gap: 4px; `;
const Name = styled.p` font-size: 14px; font-weight: 600; color: ${({ theme }) => theme.text}; `;
const Copyright = styled.p` font-size: 12px; color: ${({ theme }) => theme.textFaint}; `;

const Links = styled.div`
  display: flex; gap: 24px; flex-wrap: wrap; justify-content: center;
  @media (max-width: 480px) { gap: 16px; }
`;
const Link = styled.a`
  font-size: 13px; color: ${({ theme }) => theme.textTertiary};
  text-decoration: none; transition: color 0.2s; letter-spacing: 0.2px;
  -webkit-tap-highlight-color: transparent;
  &:hover { color: ${({ theme }) => theme.c1}; }
`;

const Footer = () => (
  <FooterSection>
    <Container>
      <Left>
        <Name>{config.footer.name}</Name>
        <Copyright>&copy; {new Date().getFullYear()}</Copyright>
      </Left>
      <Links>
        {config.footer.links.map((link) => (
          <Link key={link.label} href={link.url} {...(link.external ? { target: "_blank" } : {})}>
            {link.label}
          </Link>
        ))}
      </Links>
    </Container>
  </FooterSection>
);

export default Footer;
