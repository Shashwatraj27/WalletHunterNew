import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 40px 20px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-top: 80px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text_primary || '#fff'};

  @media (max-width: 1024px) {
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Section = styled.div`
  margin-bottom: 40px;
  width: 80%;

  @media (max-width: 1024px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    width: 95%;
  }
`;

const SectionTitle = styled(Link)`
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.primary || "#00796b"};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 1024px) {
    font-size: 1.6rem;
  }
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const SectionContent = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text_secondary || '#bbb'};

  @media (max-width: 1024px) {
    font-size: 0.95rem;
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const WhitepaperPage = () => {
  return (
    <PageContainer>
      <Title>Odyssey Whitepaper: Wallet Hunter</Title>

      <Section>
        <SectionTitle to="/whitepaper/bee-story">Bee’s Story: The Evolution of Marketing</SectionTitle>
        <SectionContent>
          From ancient marketplaces to Web3, marketing has evolved by leveraging new
          technologies and fostering deeper human connections. Explore the journey
          from Mesopotamian trade to the decentralized revolution.
        </SectionContent>
      </Section>

      
    </PageContainer>
  );
};

export default WhitepaperPage;