import React from "react";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import WH_logo2 from "../images/WH_logo2.png";

const MobileMenuToggle = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    gap: 5px;

    div {
      width: 25px;
      height: 3px;
      background: ${({ theme }) => theme.text_primary};
      transition: all 0.3s ease;

      &:nth-child(1) {
        transform: ${({ isOpen }) => (isOpen ? "rotate(45deg) translate(5px, 5px)" : "none")};
      }
      &:nth-child(2) {
        opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
      }
      &:nth-child(3) {
        transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg) translate(5px, -5px)" : "none")};
      }
    }
  }
`;


const MobileMenu = styled(motion.ul)`
  display: none;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 80px;
  right: 0;
  background: ${({ theme }) => theme.bg};
  width: 100%;
  z-index: 999;
  padding: 20px 0;
  list-style: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &.open {
    display: flex;
  }

  li {
    margin: 10px 0;
  }
`;

const Nav = styled(motion.div)`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  img {
    width: 150px;
    height: auto;
  }
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;


const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  font-size: 1rem;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: scale(1.1);
  }
`;

const DropdownMenu = styled(motion.ul)`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: ${({ theme }) => theme.card_light};
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 1000;

  ${NavItem}:hover & {
    display: block;
  }
`;

const DropdownItem = styled.li`
  padding: 10px 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.text_secondary};
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const AuditButton = styled.a`
  background-color: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.text_primary};
  padding: 10px 20px;
  border-radius: 15px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.button_bg_hover};
    transform: scale(1.05);
  }
`;


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <img src={WH_logo2} alt="Wallet Hunter Logo" />
        </NavLogo>

        <MobileMenuToggle onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <div />
          <div />
          <div />
        </MobileMenuToggle>
        <MobileMenu
          className={isMobileMenuOpen ? "open" : ""}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : -20 }}
        >
          {/** Add nav items for mobile */}
          {[
            { label: "Whitepaper", link: "#Whitepaper" },
            { label: "Company", link: "#Company" },
            { label: "Services", link: "#Services" },
            { label: "Toolkit", link: "#Toolkit" },
            { label: "Blog", link: "#Blog" },
            { label: "Wallet Hunter Show", link: "#WalletHunterShow" },
            { label: "Events", link: "#Events" },
            { label: "Case Study", link: "#CaseStudy" },
            { label: "Pricing", link: "#Pricing" },
          ].map((item) => (
            <li key={item.link}>
              <NavLink href={item.link}>{item.label}</NavLink>
            </li>
          ))}
          <li>
            <AuditButton href="#MarketingAudit">Marketing Audit</AuditButton>
          </li>
        </MobileMenu>

        <NavItems>
          <NavItem>
            <NavLink href="#Whitepaper">Whitepaper</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#Company">Company</NavLink>
            <DropdownMenu>
              <DropdownItem>About Us</DropdownItem>
              <DropdownItem>Team</DropdownItem>
              <DropdownItem>Careers</DropdownItem>
              <DropdownItem>Values1</DropdownItem>
              <DropdownItem>Values2</DropdownItem>
              <DropdownItem>Values3</DropdownItem>
              <DropdownItem>Values4</DropdownItem>
            </DropdownMenu>
          </NavItem>
          <NavItem>
            <NavLink href="#Services">Services</NavLink>
            <DropdownMenu>
              <DropdownItem>Consulting</DropdownItem>
              <DropdownItem>Development</DropdownItem>
              <DropdownItem>Support</DropdownItem>
              <DropdownItem>Values1</DropdownItem>
              <DropdownItem>Values2</DropdownItem>
              <DropdownItem>Values3</DropdownItem>
              <DropdownItem>Values4</DropdownItem>
            </DropdownMenu>
          </NavItem>
          <NavItem>
            <NavLink href="#Toolkit">Toolkit</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#Blog">Blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#WalletHunterShow">Wallet Hunter Show</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#Events">Events</NavLink>
            <DropdownMenu>
              <DropdownItem>Upcoming</DropdownItem>
              <DropdownItem>Past</DropdownItem>
              <DropdownItem>Register</DropdownItem>
              <DropdownItem>Values1</DropdownItem>
              <DropdownItem>Values2</DropdownItem>
              <DropdownItem>Values3</DropdownItem>
              <DropdownItem>Values4</DropdownItem>
            </DropdownMenu>
          </NavItem>
          <NavItem>
            <NavLink href="#CaseStudy">Case Study</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#Pricing">Pricing</NavLink>
          </NavItem>
        </NavItems>
        <ButtonContainer>
          <AuditButton href="#MarketingAudit">Marketing Audit</AuditButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
