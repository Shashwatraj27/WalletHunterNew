import React from "react";
import styled, { keyframes } from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import WallethunterBGVideo from "../../images/WallethunterBGVideo.mp4"; 

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0;
  z-index: 1;
  height: 100vh; 
  overflow: hidden;
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 1100px;
`;

const glow = keyframes`
  from {
    text-shadow: 0 0 10px #60b7cd, 0 0 20px #60b7cd, 0 0 30px #60b7cd;
  }
  to {
    text-shadow: 0 0 20px #60b7cd, 0 0 30px #60b7cd, 0 0 40px #60b7cd;
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 64px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.2;
  animation: ${glow} 2s ease-in-out infinite alternate;

  @media (max-width: 960px) {
    font-size: 40px;
    line-height: 48px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.2;

  @media (max-width: 960px) {
    font-size: 22px;
    line-height: 1.2;
  }
`;

const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 960px) {
    text-align: center;
    font-size: 16px;
    line-height: 1.5;
  }
`;

const VideoBackground = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: -1;
  filter: brightness(0.5); /* Darken the video for better text readability */
`;

const AboutUsContainer = styled.div`
  margin-top: 40px;
  padding: 40px 20px;
  background : linear-gradient(#60b7cd,#fff3); /* Dark gradient background */
  
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  text-align: center;
  color: #f0f0f0; /* Lighter text for contrast */
  animation: ${fadeInUp} 1s ease-in-out;
`;

const AboutUsTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  animation: ${fadeInUp} 1.2s ease-in-out;
`;

const AboutUsText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  animation: ${fadeInUp} 1.4s ease-in-out;
`;

const TrialCallSection = styled.div`
  background-color: transparent; /* Dark transparent background */
  /* Frosted glass effect */
  padding: 20px 20px;
  border-radius: 16px; /* Slightly more rounded corners */
  text-align: center;
  /*box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);  Enhanced shadow for depth */
  margin-top: 40px;
  animation: ${fadeInUp} 1s ease-in-out;
 
  transition: transform 0.3s ease, box-shadow 0.3s ease;

`;




const RequestTrialButton = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.button};
  color: #fff; /* Use white for better contrast */
  padding: 14px 32px; /* Larger padding for a bold look */
  border-radius: 50px; /* Capsule shape */
  font-weight: 700; /* Make the font bolder */
  font-size: 1.2rem; /* Slightly larger font size */
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
  transition: all 0.3s ease-in-out;
  animation: ${fadeInUp} 1.6s ease-in-out;

  &:hover {
    background-color: #2582b5; /* Darker shade for hover */
    transform: scale(1.08); /* Slightly larger on hover */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* More pronounced shadow on hover */
  }

  &:active {
    transform: scale(1); /* Reset scale when clicked */
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2); /* Slightly smaller shadow */
  }
`;


const Hero = () => {
  return (
    <div id="About">
      <HeroContainer>
        <VideoBackground autoPlay loop muted>
          <source src={WallethunterBGVideo} type="video/mp4" />
        </VideoBackground>
        <HeroInnerContainer>
          <Title>
            Welcome to <br /> Wallet Hunter
          </Title>
          <TextLoop>
            <Span>
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </Span>
          </TextLoop>
          <SubTitle>{Bio.description}</SubTitle>
        </HeroInnerContainer>
      </HeroContainer>
      <AboutUsContainer>
        <AboutUsTitle>Unleash your Web3 potential with Wallet Hunter</AboutUsTitle>
       {/* <AboutUsText>
          “Marketing without data is like driving with your eyes closed.” – Dan Zarrella
        </AboutUsText> */}

        <AboutUsText>
        “Marketing without data? That’s like navigating a starship through a black hole—blind”. - ChatGPT
        </AboutUsText>

        <AboutUsText>
        In the vast expanse of Web3, chaos is the default. But Wallet Hunter? We’re the architects of order.

        </AboutUsText>
       {/* <AboutUsText>
          Unlock Web3 success with Wallet Hunter – where innovation meets strategy. Crafted personas, tailored marketing, and trusted transitions. Join brands choosing tailored, data-driven triumph.
        </AboutUsText>*/}

        <AboutUsText>
        We craft identities, engineer precision marketing, and guide brands through seamless transitions—all powered by data, innovation, and a little bit of calculated audacity.

        </AboutUsText>

        <AboutUsText>
        Trust the data. Trust the process. The mission is on—shall we begin?

Activate your trial today.
        </AboutUsText>

        <TrialCallSection>
          {/*<TrialCallTitle>Unparalleled Precision in Community and Creator Engagement Analysis</TrialCallTitle>
          <TrialCallText>
            Experience unparalleled precision in community and creator engagement analysis with a free trial, backed by expert guidance to ensure your success every step of the way.
          </TrialCallText>*/}
          <RequestTrialButton href="#RequestTrial">Request your trial now</RequestTrialButton>
        </TrialCallSection>
      </AboutUsContainer>
    </div>
  );
};

export default Hero;
