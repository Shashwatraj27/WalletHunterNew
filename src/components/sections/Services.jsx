import React from "react";
import styled, { keyframes } from "styled-components";

import { FaBullseye, FaGift, FaUserFriends, FaSearch } from "react-icons/fa"; // Example icons

import gif4 from "../../images/PricingCardLogo4.gif";
import gif1 from "../../images/services1.gif";
import gif2 from "../../images/arc_reactor.gif";
import gif3 from "../../images/PricingCardLogo3.gif";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0px;
  position: relative;
  z-index: 1;
  align-items: center;
  background: linear-gradient(134deg,#c2c2c2,#fff3,#c2c2c2,transparent);
 padding: 0px 20px; /* Adjust padding if needed */
  
  overflow: hidden; /* Ensure no overflow contributes to spacing */
  
  /* Remove unwanted bottom spacing */
  margin-bottom: 0;
  box-sizing: border-box; /* Include padding/border in the element's dimensions */

 
  
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  gap: 20px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  font-size: 56px;
  text-align: center;
  font-weight: 700;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 36px;
  }
`;

const Desc = styled.p`
  font-size: 20px;
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 30px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const GifIcon = styled.img`
  width: 60px; /* Adjust size as needed */
  height: 60px;
  margin-bottom: 10px;
  object-fit: cover;
  border-radius: 50%; /* Make it circular if desired */
  z-index: 2; /* Keep above the other layers */
`;

const Card = styled.div`
  background: linear-gradient(134deg,#c2c2c2,#fff3,#c2c2c2,transparent);
  border: none;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  width: 220px;
  height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  animation: ${fadeIn} 1s ease-in-out;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;



const CardTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.text_card_primary}; /* Updated text color */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

const CardDesc = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_card_secondary}; /* Updated text color */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

const Services = () => {
  const services = [
    {
      title:(
        <>
         Targeted <br/> Marketing
        </>
         ),
      description:
        "Dive deeper into precision marketing with our wallet-targeted strategies. By focusing on specific wallet owners, we ensure your project reaches the most interested and relevant audience, maximizing engagement and response rates.",
      icon: <FaBullseye />,
      gif: gif1,
    },
    {
      title: "Airdrop Services",
      description:
        "Airdrops are a powerful tool for building a community and rewarding loyal users. Our airdrop services are designed to maximize engagement and participation, ensuring your project's success.",
      icon: <FaGift />,
      gif: gif4,
    },
    {
      title: "Wallet Enrichment",
      description:
        "Unleash the power of on-chain analysis, crafting enhanced profiles and fostering better personas for comprehensive success.",
      icon: <FaUserFriends />,
      gif: gif2,
    },
    {
      title: "Web3.0 SEO",
      description:
        "Wallet Hunter's Web3 SEO services boost brand awareness through robust on-page and off-page SEO, attracting organic traffic and offering full support for web3 distribution strategy and content implementation.",
      icon: <FaSearch />,
      gif : gif3,
    }
  ];

  return (
    <Container id="Services">
      <Wrapper>
        <Title>Our Services</Title>
        <Desc>Seamlessly providing high-quality services in</Desc>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {services.map((service, index) => (
            <Card key={`service-${index}`}>
              <GifIcon src={service.gif} alt={`GIF for ${service.title}`} />

              
              
              <CardTitle>{service.title}</CardTitle>
              <CardDesc>{service.description}</CardDesc>
            </Card>
          ))}
        </div>
      </Wrapper>
    </Container>
  );
};

export default Services;
