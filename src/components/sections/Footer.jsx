import React from "react";
import styled from "styled-components";
import WH_logo2 from "../../images/WH_logo2.png";
import { Bio } from "../../data/constants";
import {
  FacebookRounded,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";

const FooterContainer = styled.div`
  width: 100%;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  z-index: 10;
  position: relative;
  background-color: ${({ theme }) => theme.bg};
   /* Adjust margin to overlap with the contact section */
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  padding: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
  object-fit: contain;
  margin-bottom: 1rem;
`;

const Nav = styled.ul`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 0;
`;

const NavItem = styled.li`
  list-style: none;
  text-align: center;
  min-width: 150px;
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SubMenu = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const SubMenuLink = styled.a`
  display: block;
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  font-size: 2rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const LegalLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
`;

const LegalLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 2rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo src={WH_logo2} alt="Wallet Hunter Logo" />
        <Nav>
          <NavItem>
            <NavLink href="#About">Company</NavLink>
            <SubMenu>
              <SubMenuLink href="#About">About Us</SubMenuLink>
              <SubMenuLink href="#Team">Team</SubMenuLink>
              <SubMenuLink href="#Careers">Careers</SubMenuLink>
              <SubMenuLink href="#Press">Press</SubMenuLink>
              <SubMenuLink href="#Contact">Contact</SubMenuLink>
            </SubMenu>
          </NavItem>
          <NavItem>
            <NavLink href="#Skills">Partnership</NavLink>
            <SubMenu>
              <SubMenuLink href="#Partners">Partners</SubMenuLink>
              <SubMenuLink href="#Join">Join Us</SubMenuLink>
              <SubMenuLink href="#Opportunities">Opportunities</SubMenuLink>
            </SubMenu>
          </NavItem>
          <NavItem>
            <NavLink href="#Experience">Services</NavLink>
            <SubMenu>
              <SubMenuLink href="#Consulting">Consulting</SubMenuLink>
              <SubMenuLink href="#Development">Development</SubMenuLink>
              <SubMenuLink href="#Support">Support</SubMenuLink>
            </SubMenu>
          </NavItem>
          <NavItem>
            <NavLink href="#Projects">Pricing</NavLink>
            <SubMenu>
              <SubMenuLink href="#Plans">Plans</SubMenuLink>
              <SubMenuLink href="#Quotes">Quotes</SubMenuLink>
              <SubMenuLink href="#Offers">Offers</SubMenuLink>
            </SubMenu>
          </NavItem>
          <NavItem>
            <NavLink href="#Education">Event</NavLink>
            <SubMenu>
              <SubMenuLink href="#Upcoming">Upcoming</SubMenuLink>
              <SubMenuLink href="#Past">Past</SubMenuLink>
              <SubMenuLink href="#Register">Register</SubMenuLink>
            </SubMenu>
          </NavItem>
          <NavItem>
            <NavLink href="#Nearby">Upcoming</NavLink>
            <SubMenu>
              <SubMenuLink href="#Incubation">Incubation</SubMenuLink>
              <SubMenuLink href="#JoinCommunity">Join Community</SubMenuLink>
              <SubMenuLink href="#Marketing101">Marketing 101</SubMenuLink>
            </SubMenu>
          </NavItem>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.facebook} target="_blank">
            <FacebookRounded />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.twitter} target="_blank">
            <Twitter />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="_blank">
            <LinkedIn />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="_blank">
            <Instagram />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <LegalLinks>
          <LegalLink href="#Legal">Legal</LegalLink>
          <LegalLink href="#Privacy">Privacy</LegalLink>
          <LegalLink href="#Authenticity">Authenticity</LegalLink>
          <LegalLink href="#Terms">Terms</LegalLink>
          <LegalLink href="#CookieSettings">Cookie Settings</LegalLink>
        </LegalLinks>
        <Copyright>&copy; {new Date().getFullYear()} Wallet Hunter. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
