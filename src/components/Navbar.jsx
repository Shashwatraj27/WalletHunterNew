import React, { useState, useEffect } from "react";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import WH_logo2 from "../images/WH_logo2.png";

import { Link } from "react-router-dom";

import first from "../images/walletshows/first_show_image.jpg";
import second from "../images/walletshows/second_show_image.jpg";
import third from "../images/walletshows/third_show_image.jpg";
import fourth from "../images/walletshows/fourth_show_image.jpg";
import fifth from "../images/walletshows/fifth_show_image.jpeg";

const NavContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  background: ${({ isScrolled, theme }) =>
    isScrolled ? theme.bg : "transparent"};
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? "0 2px 10px rgba(179, 110, 110, 0.1)" : "none"};
`;

const NavWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(LinkR)`
  display: flex;
  align-items: center;
  img {
    height: 90px;
    width: auto;
  }
`;

const DesktopNav = styled.nav`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 32px;
  }
`;

const NavItem = styled.div`
  position: relative;
  height: 80px;
  display: flex;
  align-items: center;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const MegaMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: -200%;
  transform: translate(-50%, -50%);
  width: min(90vw, 1000px);
  background: ${({ theme }) => theme.bg};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 32px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
  pointer-events: ${({ isVisible }) => (isVisible ? "auto" : "none")};
  z-index: 1000;
  overflow: hidden;
  box-sizing: border-box;
  max-height: 90vh;
  overflow-y: auto;

  /* Conditional styling based on the menuType prop */
  ${({ menuType }) =>
    menuType === "company" &&
    `
      left : 100%;
       display: none;
  `}

  ${({ menuType }) =>
    menuType === "solutions" &&
    `
      
      left : -700%;
       
  `}

  ${({ menuType }) =>
    menuType === "Whitepaper" &&
    `
    display : none;
       
  `}

  ${({ menuType }) =>
    menuType === "Blog" &&
    `
    display : none;
       
  `}

  ${({ menuType }) =>
    menuType === "WalletHunterShow" &&
    `
    display : true;
       
  `}

  ${({ menuType }) =>
    menuType === "CaseStudy" &&
    `
    display : true;
       
  `}
`;

const MegaMenuSection = styled.div`
  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const MegaMenuItem = styled.a`
  display: block;
  padding: 8px 0;
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
  }

  p {
    font-size: 14px;
    margin-top: 4px;
    color: #cfcfcf;
    opacity: 0.8;
  }
`;

const CTAButton = styled.a`
  background: linear-gradient(135deg, #e0f7fa, #b2ebf2); /* Light gradient */
  color: #00796b; /* Complementary dark teal for text */
  padding: 14px 28px; /* Comfortable padding */
  border-radius: 30px; /* Softer, pill-shaped edges */
  text-decoration: none;
  font-weight: 600; /* Slightly bolder text for emphasis */
  font-size: 1rem; /* Readable font size */
  box-shadow: 0 4px 8px rgba(0, 200, 190, 0.3); /* Subtle glow effect */
  transition: transform 0.2s ease, box-shadow 0.3s ease, background 0.3s ease;

  &:hover {
    transform: translateY(-3px); /* Lift effect on hover */
    box-shadow: 0 6px 16px rgba(0, 200, 190, 0.4); /* Enhanced glow */
    background: linear-gradient(
      135deg,
      #b2ebf2,
      #e0f7fa
    ); /* Slightly brighter hover gradient */
  }

  &:active {
    transform: translateY(1px); /* Subtle press effect */
    box-shadow: 0 2px 6px rgba(0, 200, 190, 0.2); /* Reduced glow on active */
  }
`;

const MobileMenuButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const MobileMenuIcon = styled.div`
  width: 24px;
  height: 2px;
  background: ${({ theme }) => theme.text_primary};
  transition: all 0.3s ease;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 24px;
    height: 2px;
    background: ${({ theme }) => theme.text_primary};
    transition: all 0.3s ease;
  }

  &::before {
    transform: translateY(-8px);
  }

  &::after {
    transform: translateY(8px);
  }

  ${({ isOpen }) =>
    isOpen &&
    `
    background: transparent;
    
    &::before {
      transform: rotate(45deg);
    }
    
    &::after {
      transform: rotate(-45deg);
    }
  `}
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.bg};
  padding: 24px;
  overflow-y: auto;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const MobileNavSection = styled.div`
  margin-bottom: 24px;

  h3 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 12px;
    color: ${({ theme }) => theme.text_primary};
  }

  h4 {
    font-size: 14px;
    font-weight: 600;
    margin: 8px 0;
    color: ${({ theme }) => theme.text_secondary};
  }
`;

const MobileNavItem = styled.a`
  display: block;
  padding: 12px 0;
  color: ${({ theme }) => theme.text_secondary};
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.border};

  &:last-child {
    border-bottom: none;
  }
`;

// Updated Navigation Data
const navigationData = {
  Company: {
    title: "Company",
    sections: [
      {
        title: "By Product",
        items: [
          {
            title: "About us",
            description:
              "Wallet Hunter is a leading provider of marketing solutions in the Web3 space.",
            link: "#reviews",
          },
          {
            title: "Our Story",
            description:
              "Founded in March 2023, Wallet Hunter emerged from the need for specialized marketing strategies.",
            link: "#story",
          },
        ],
      },
      {
        title: "By Industry",
        items: [
          {
            title: "Company Culture",
            description:
              "At Wallet Hunter, we foster a culture of innovation, creativity, and collaboration.",
            link: "#CompanyCulture",
          },
          {
            title: "Partners & Collaborations",
            description:
              "We are proud to collaborate with leading Web3 companies.",
            link: "#Partners & Collaborations",
          },
          {
            title: "Careers",
            description: "Join our innovative and passionate team.",
            link: "#careers",
          },
        ],
      },
    ],
  },
  Whitepaper: {
    title: "Whitepaper",
    sections: [
      {
        title: "Documentation",
        items: [
          {
            title: "Technical Whitepaper",
            description: "Detailed technical documentation and specifications",
            link: "#whitepaper",
          },
        ],
      },
    ],
  },
  Blog: {
    title: "Blog",
    sections: [
      {
        title: "Content",
        items: [
          {
            title: "Latest Posts",
            description: "Read our latest insights and updates",
            link: "#blog",
          },
        ],
      },
    ],
  },
  WalletHunterShow: {
    title: "Wallet Hunter Show",
    sections: [
      {
        title: "Episodes",
        items: [
          {
            title:
              "Latest Episodes:- Web3 Innovation: The Future of Gasless Smart Wallets",
            description:
              "In this exciting episode, we sit down with Rohit, the visionary behind WalletX, a game-changing gasless smart wallet that allows users to execute transactions across major EVM networks without paying gas fees. WalletX brings next-level security, flexibility, and innovative monetization through its unique P2P advertisement layer, setting the stage for the future of Web3 interactions.",
            link: "https://www.linkedin.com/events/web3innovation-episode59-thefut7255077917930455040",
            image: first,
          },
          {
            title:
              " Web3 Innovation: Driving Blockchain Adoption and Fintech Transf",
            description:
              "Join us for an exciting episode with Tarusha Mittal, co-founder of dapps.co and producer of Living on Blockchain! A Web3 pioneer, Tarusha has led groundbreaking innovations in blockchain and DeFi. From launching one of India’s first Ethereum exchanges to building leading fintech platforms, she’s shaping the future of Web3.",
            link: "https://www.linkedin.com/events/web3innovation-episode57-drivin7246951541499142144/theater/",
            image: second,
          },

          {
            title: "Watch & Earn: The Future of Streaming on Earn.TV",
            description:
              "Join us for an exciting episode with Pascal Vallat, founder of Earn.tv! With 20 years in marketing and blockchain, he’s revolutionizing streaming—where watching pays off. Discover how Earn.tv’s blockchain-powered platform rewards viewers and transforms content distribution. Don’t miss it! 🎬💡",
            link: "https://www.linkedin.com/events/episode49-watch-earn-thefutureo7219047468968157184/theater/",
            image: third,
          },
          {
            title: "Unifying Crypto Transactions for Seamless Trade",
            description:
              "Join us in this exciting episode as we sit down with Paycio’s visionary Founder, Bibin, and Aklesh from the community team to explore how Paycio is transforming the world of crypto payments. Discover how their Unified Crypto Payment Interface (UCPI) enables fast, secure, and simplified transactions for C2C, B2B, and B2C users. Learn about the future of crypto payments, the challenges in the space, and how Paycio is leading the way in building a safer, more unified payment system for everyone.",
            link: "https://www.linkedin.com/events/episode57-unifyingcryptotransac7245429695012372480/theater/",
            image: fourth,
          },
          {
            title: "Get Going on Bitcoin Halving! ",
            description: "Watch our latest shows and interviews",
            link: "https://www.linkedin.com/events/getgoingonbitcoinhalving-episod7186627349600178177/theater/",
            image: fifth,
          },
        ],
      },
    ],
  },
  CaseStudy: {
    title: "Case Study",
    hasMegaMenu: false,
    sections: [
      {
        title: "Success Stories",
        items: [
          {
            title: "Client Cases",
            description: "Explore our client success stories",
            link: "#case-study",
          },
        ],
      },
    ],
  },
  solutions: {
    title: "Solutions",
    sections: [
      {
        title: "Social Media Marketing",
        items: [
          {
            title: "Twitter Growth",
            description:
              "Expand your Twitter following with growth strategies designed to attract real and engaged followers",
            link: "#twitter-growth",
          },
          {
            title: "Web3 Social Media Brand Building",
            description:
              "Craft and maintain a strong, authentic Web3 brand presence across social platforms",
            link: "#brand-building",
          },
          {
            title: "Platform Marketing",
            description:
              "Comprehensive marketing across Telegram, Discord, and YouTube platforms",
            link: "#platform-marketing",
          },
          {
            title: "Paid Advertising",
            description:
              "Drive targeted traffic and leads through paid advertisements on Twitter and Google",
            link: "#paid-ads",
          },
        ],
      },
      {
        title: "Community Engagement",
        items: [
          {
            title: "KOL & Influencer Marketing",
            description:
              "Partner with key opinion leaders and influencers in Web3/Blockchain space",
            link: "#influencer-marketing",
          },
          {
            title: "Community Programs",
            description:
              "Ambassador and referral programs to accelerate growth and engagement",
            link: "#community-programs",
          },
          {
            title: "Community Management",
            description:
              "Professional moderation and growth strategies for Telegram and Discord communities",
            link: "#community-management",
          },
        ],
      },
      {
        title: "Specialized Services",
        items: [
          {
            title: "Event Management",
            description:
              "Launch events, physical parties, and strategic campaign execution",
            link: "#events",
          },
          {
            title: "Token & NFT Marketing",
            description:
              "Specialized marketing for token launches, NFTs, and meme coins",
            link: "#token-marketing",
          },
          {
            title: "Web3 SEO & Analytics",
            description:
              "Optimized Web3 SEO strategies and community analytics",
            link: "#web3-seo",
          },
        ],
      },
      {
        title: "Tools & Solutions",
        items: [
          {
            title: "Community Tools",
            description:
              "Custom Telegram and Discord bots for enhanced community interaction",
            link: "#community-tools",
          },
          {
            title: "Wallet Solutions",
            description:
              "Wallet enrichment and address-based marketing strategies",
            link: "#wallet-solutions",
          },
          {
            title: "Content Marketing",
            description:
              "Strategic podcast content and personalized email campaigns",
            link: "#content-marketing",
          },
        ],
      },
    ],
  },
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavContainer isScrolled={isScrolled}>
      <NavWrapper>
        <Logo to="/">
          <img src={WH_logo2} alt="Logo" />
        </Logo>

        <DesktopNav>
          {Object.entries(navigationData).map(([key, section]) => (
            <NavItem
              key={key}
              onMouseEnter={() => setActiveMenu(key)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              {key === "WalletHunterShow" ? (
                <Link to="/walletshows" onClick={() => setActiveMenu(false)}>
                  <NavButton>{section.title}</NavButton>
                </Link>
              ) : key === "Whitepaper" ? (
                <Link to="/whitepaper">
                  <NavButton>{section.title}</NavButton>
                </Link>
              ) : key === "Blog" ? (
                <Link to="/Blog">
                  <NavButton>{section.title}</NavButton>
                </Link>
              ) :key === "CaseStudy" ? (
                <Link to="/casestudy">
                  <NavButton>{section.title}</NavButton>
                </Link>
              ):
               (
                <NavButton>{section.title}</NavButton>
              )}
              <AnimatePresence>
                {activeMenu === key && (
                  <MegaMenu
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.2 }}
                    isVisible={activeMenu === key}
                    menuType={key}
                  >
                    {section.sections.map((subsection, index) => (
                      <MegaMenuSection
                        key={index}
                        style={
                          key === "WalletHunterShow"
                            ? {
                                //backgroundColor: "white",
                                padding: "20px",
                                borderRadius: "8px",
                              }
                            : {}
                        }
                      >
                        <h3>{subsection.title}</h3>

                        {subsection.items.map((item, itemIndex) => (
                          <MegaMenuItem
                            key={itemIndex}
                            href={item.link}
                            style={
                              key === "WalletHunterShow"
                                ? {
                                    //color: "white",
                                    //fontWeight: "bold",
                                    display: "flex",
                                    alignItems: "center",
                                  }
                                : {}
                            }
                          >
                            {/* Banner Image for Wallet Hunter Show Items */}
                            {key === "WalletHunterShow" && item.image && (
                              <img
                                src={item.image}
                                alt={item.title}
                                style={{
                                  width: "200px",
                                  height: "auto",
                                  borderRadius: "8px",
                                  marginRight: "12px",
                                  border: "1px solid gray",
                                }}
                              />
                            )}

                            <div>
                              <strong>{item.title}</strong>
                              <p>{item.description}</p>
                            </div>
                          </MegaMenuItem>
                        ))}
                      </MegaMenuSection>
                    ))}
                  </MegaMenu>
                )}
              </AnimatePresence>
            </NavItem>
          ))}
        </DesktopNav>

        <CTAButton href="#Marketing Audit">Marketing Audit</CTAButton>

        <MobileMenuButton
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <MobileMenuIcon isOpen={isMobileMenuOpen} />
        </MobileMenuButton>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <MobileMenu
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween" }}
            >
              {Object.values(navigationData).map((section, index) => (
                <MobileNavSection key={index}>
                  <h3>{section.title}</h3>
                  {section.sections.map((subsection, subIndex) => (
                    <div key={subIndex}>
                      <h4>{subsection.title}</h4>
                      {subsection.items.map((item, itemIndex) => (
                        <MobileNavItem key={itemIndex} href={item.link}>
                          {item.title}
                        </MobileNavItem>
                      ))}
                    </div>
                  ))}
                </MobileNavSection>
              ))}
              <CTAButton
                href="#Marketing Audit"
                style={{ display: "inline-block", marginTop: "24px" }}
              >
                Marketing Audit
              </CTAButton>
            </MobileMenu>
          )}
        </AnimatePresence>
      </NavWrapper>
    </NavContainer>
  );
};

export default Navbar;
