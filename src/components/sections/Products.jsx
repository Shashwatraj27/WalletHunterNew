import React from "react";
import styled from "styled-components";
import TelegramTrendsImage from "../../images/TelegramTrends.png"; // Import the image

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 10px;
  position: relative;
  z-index: 1;
  align-items: center;
  background: linear-gradient(135deg, ${({ theme }) => theme.bgLight}, ${({ theme }) => theme.primaryLight}); /* Gradient background */
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* Add shadow for depth */
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
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

const ImageContainer = styled.div`
  position: relative;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border: 2px solid ${({ theme }) => theme.primary}; /* Updated border color */
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* Add shadow to image */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3); /* Enhance hover effect */
  }
`;

const Highlight = styled.div`
  font-size: 28px; /* Made the text larger */
  text-align: center;
  font-weight: bold;
  color: ${({ theme }) => theme.text_primary}; /* Use theme color */
  margin-top: 20px;
`;

const VisitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center; /* Center the text/icon */
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 50px; /* Capsule shape */
  padding: 12px 24px; /* Larger padding for a bold look */
  font-size: 1rem; /* Standardized font size */
  font-weight: 700; /* Bolder text for emphasis */
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */

  /* Gradient overlay effect */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 200%;
    height: 100%;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.1)
    );
    transition: left 0.4s ease-in-out;
    z-index: 0;
  }

  &:hover::before {
    left: 0; /* Move gradient overlay on hover */
  }

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    transform: translateY(-3px); /* Slight lift on hover */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Enhanced shadow on hover */
  }

  &:active {
    transform: translateY(0); /* Reset position when clicked */
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2); /* Slightly smaller shadow */
  }

  &:focus {
    outline: none;
  }

  span {
    position: relative;
    z-index: 1; /* Keep text above overlay */
  }
`;


const PlaneIcon = styled.span`
  margin-left: 8px;
  display: inline-block;
  animation: fly 2s infinite; /* Infinite flying animation */

  svg {
    width: 20px;
    height: 20px;
  }

  @keyframes fly {
    0% {
      transform: translateX(0) rotate(0);
    }
    50% {
      transform: translateX(5px) rotate(10deg);
    }
    100% {
      transform: translateX(0) rotate(0);
    }
  }
`;

const Products = () => {
  return (
    <Container id="Products">
      <Wrapper>
        <Title>Telegram Trends</Title>
        <Desc>
          <br />
          Real-time analysis of trends on Telegram
        </Desc>
        <ImageContainer>
          <Image src={TelegramTrendsImage} alt="Telegram Trends" />
        </ImageContainer>
        <Highlight>
          <VisitButton
            onClick={() => window.open("https://dashboard.telegramtrends.xyz/", "_blank", "noopener noreferrer")}
          >
            WooBee
            <PlaneIcon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="22,2 11,13 15,22 22,2" />
                <line x1="15" y1="22" x2="9" y2="13" />
                <line x1="9" y1="13" x2="2" y2="16" />
              </svg>
            </PlaneIcon>
          </VisitButton>
        </Highlight>
      </Wrapper>
    </Container>
  );
};

export default Products;
