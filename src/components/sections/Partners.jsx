import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  
  background-color: transparent;
  padding: 40px;
  
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
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

const move = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const Strip = styled.div`
  display: flex;
  white-space: nowrap;
  animation: ${move} 30s linear infinite; /* Slower animation for a smoother feel */
  gap: 50px;
`;

const Partner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(96, 183, 205,0.7),#cdcdcd);
  border: 1px solid rgba(0, 0, 0, 0.1); /* Subtle border */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Softer shadow */
  border-radius: 16px;
  padding: 18px 36px;
  color: ${({ theme }) => theme.cardText}; /* Updated text color */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Enhanced hover effect */
  }
`;

const PartnerImage = styled.img`
  width: 60px; /* Slightly larger image */
  height: 60px;
  margin-right: 20px;
`;

const Partners = () => {
  // Placeholder partners data
  const partners = [
    { name: "Partner 1", image: "/path/to/image1.png" },
    { name: "Partner 2", image: "/path/to/image2.png" },
    { name: "Partner 3", image: "/path/to/image3.png" },
    { name: "Partner 4", image: "/path/to/image4.png" },
    { name: "Partner 5", image: "/path/to/image5.png" },
  ];

  return (
    <Container id="Partners">
      <Wrapper>
        <Title>Our Partners</Title>
        <Desc>Some of our esteemed partners</Desc>
        <Strip>
          {partners.map((partner, index) => (
            <Partner key={`partner-${index}`}>
              <PartnerImage src={partner.image} alt={partner.name} />
              {partner.name}
            </Partner>
          ))}
        </Strip>
      </Wrapper>
    </Container>
  );
};

export default Partners;
