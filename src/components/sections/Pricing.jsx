import React from "react";
import styled from "styled-components";
import video1 from "../../images/card_bg1.mp4";
import video4 from "../../images/card_video3.mp4";
import video2 from "../../images/card_video2.mp4";
import video3 from "../../images/card_video4.mp4";
import gif1 from "../../images/Mr3W.gif";
import gif2 from "../../images/card.gif";
import gif3 from "../../images/card_gif4.gif";
import gif4 from "../../images/card3.gif";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  /*background: linear-gradient(135deg, #1f1f1f, #2c2c2c, #444, #555, #666);  Futuristic gradient background */
 background :linear-gradient(134deg,#60b7cd,#c2c2c2);*/
 background-color: black;
  padding: 40px;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* Add shadow for depth */
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

const PricingGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

const PricingCard = styled.div`
  background-color: linear-gradient(#2c2c2c,transparent);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  padding: 20px;
  width: 100%;
  max-width: 300px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

const PricingTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text_primary};
`;

const Price = styled.p`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text_primary};
`;

const Features = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const Feature = styled.li`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 8px;
`;

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  
`;

const BlogTitle = styled(Title)`
  margin-top: 0;
`;

const BlogStrip = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 30px;
`;
const BlogCard = styled.div`
  background: linear-gradient(134deg,#60b7cd,#c2c2c2,transparent);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  padding: 20px;
  width: 100%;
  max-width: 250px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
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
const InitialVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  object-fit: cover;
  opacity: 1; /* Visible by default */
  visibility: visible;
  transition: opacity 0.3s ease;
  z-index: 0; /* Behind the title */

  ${BlogCard}:hover & {
    opacity: 0; /* Hide on hover */
    visibility: hidden;
  }
`;

const InitialGif = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  object-fit: cover;
  opacity: 1; /* Visible by default */
  visibility: visible;
  transition: opacity 0.3s ease;
    z-index: 0; /* Behind the title */
  filter: blur(1px); /* Add blur effect */
  

  ${BlogCard}:hover & {
    opacity: 0; /* Hide GIF on hover */
    visibility: hidden;
  }
`;

const BlogVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  object-fit: cover;
  opacity: 0; /* Hidden by default */
  visibility: hidden;
  transition: opacity 0.3s ease;
  z-index: 0; /* Behind the title */
  filter: blur(1px); /* Add blur effect */
  
  

  ${BlogCard}:hover & {
    opacity: 1; /* Show video on hover */
    visibility: visible;
  }
`;

const BlogDesc = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  margin-top: 20px;
  opacity: 0; /* Hidden by default */
  visibility: hidden;
  transition: opacity 0.3s ease;
  z-index: 1; /* Above the video */

  ${BlogCard}:hover & {
    opacity: 1; /* Reveal description */
    visibility: visible;
  }
`;



const BlogTitleText = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin: auto; /* Center title vertically */
  color: ${({ theme }) => theme.text_primary};
  z-index: 1;
  transition: opacity 0.3s ease;

  ${BlogCard}:hover & {
    margin-top: 10px; /* Move up slightly when revealing other content */
  }
`;

const Blog = () => {
  const blogPosts = [
    {
      title: "Understanding Web3 and Its Impact",
      description: "Explore the fundamentals of Web3 and how it's transforming the digital landscape.",
      gif: gif1, // Replace with the GIF URL
      video: video1, // Replace with the video URL
    },
    {
      title: "Decentralized Finance (DeFi) Explained",
      description: "A deep dive into DeFi, its benefits, and how it's revolutionizing the financial industry.",
      gif: gif2, // Replace with the GIF URL
      video: video2, // Replace with the video URL
    },
    {
      title: "The Role of NFTs in Web3",
      description: "Learn about non-fungible tokens (NFTs) and their growing influence in the Web3 ecosystem.",
      gif: gif3, // Replace with the GIF URL
      video: video3, // Replace with the video URL
    },
    {
      title: "Web3 Security Best Practices",
      description: "Discover essential security tips to protect your assets and data in the Web3 world.",
      gif: gif4, // Replace with the GIF URL
      video: video4, // Replace with the video URL
    },
  ];

  return (
    <BlogContainer id="Blogs">
      <BlogTitle>Latest Blogs</BlogTitle>
      <Desc>Stay updated with the latest trends and insights in Web3</Desc>
      <BlogStrip>
        {blogPosts.map((post, index) => (
          <BlogCard key={`blog-${index}`}>
            
            <GifIcon src={post.gif} alt={`GIF for ${post.title}`} /> 
            <BlogVideo src={post.video} autoPlay muted loop />
            <BlogTitleText>{post.title}</BlogTitleText>
            <BlogDesc>{post.description}</BlogDesc>
          </BlogCard>
        ))}
      </BlogStrip>
    </BlogContainer>
  );
};



const Pricing = () => {
  /*const pricingLevels = [
    {
      title: "Basic",
      price: "$19.99/month",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      title: "Standard",
      price: "$49.99/month",
      features: ["Feature A", "Feature B", "Feature C", "Feature D"],
    },
    {
      title: "Premium",
      price: "$99.99/month",
      features: ["Feature X", "Feature Y", "Feature Z", "Feature W", "Feature V"],
    },
  ];*/

  return (
    <Container id="Pricing">
      <Wrapper>{/*
        <Title>Pricing</Title>
        <Desc>Our pricing plans are designed to meet your needs and budget.</Desc>
       <PricingGrid>
          {pricingLevels.map((level, index) => (
            <PricingCard key={`pricing-${index}`}>
              <PricingTitle>{level.title}</PricingTitle>
              <Price>{level.price}</Price>
              <Features>
                {level.features.map((feature, index) => (
                  <Feature key={`feature-${index}`}>{feature}</Feature>
                ))}
              </Features>
            </PricingCard>
          ))}
        </PricingGrid>*/}
      </Wrapper>
      <Blog />
    </Container>
  );
};

export default Pricing;
