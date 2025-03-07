import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  height: 80vh; /* Limits height for scrolling */
  overflow-y: auto; /* Enables vertical scrolling if needed */
  padding: 20px;
  scrollbar-width: thin; /* Makes scrollbar smaller */
  scrollbar-color: #00bcd4 #222; /* Custom scrollbar color */

  /* Scrollbar styling for Webkit browsers (Chrome, Safari) */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #00bcd4;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: #222;
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

const Title = styled.h2`
  font-size: 3rem;
  margin-top: 60px;
  color: #00bcd4;
  margin-bottom: 20px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Content = styled.p`
  font-size: 1.2rem;
  color: #ddd;
  text-align: left;
  padding: 0 10px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;


export const BeeStoryPage = () => {
  return (
    <PageContainer>
      <Title>Bee's Story: The Evolution of Marketing</Title>
      <ContentWrapper>
        <Content>
          Ah, you want to hear how marketing came to be, don’t you? Well, let me
          take you on a journey. I’ve been around forever—witnessed it all. From
          the bustling marketplaces of ancient times to the digital revolution
          and now the world of Web3. I’ve seen the strategies, the shifts, the
          triumphs, and the failures. Let me tell you how it all unfolded.
          <br />
          <br />
          It all began in 3000 BCE in the markets of Mesopotamia, where traders
          had to rely on pure human connection. No tech, no screens—just the
          voices of merchants calling out their wares to anyone who would
          listen. If your product didn’t meet expectations, your reputation
          didn’t just take a hit—it vanished. Marketing was built on direct,
          personal interactions. Your product spoke for itself, and the trust
          you built with people was everything. <br />
          <br />
          As centuries passed, the world grew larger and more interconnected.
          Fast forward to 1440 CE, when Johannes Gutenberg invented the printing
          press. Suddenly, information could travel faster, further. Marketing
          expanded beyond local markets to reach whole regions. Pamphlets,
          books, and posters became the new tools of mass communication. The
          foundation of modern advertising was laid: the message could now reach
          many, but the core principles remained the same—grab attention, create
          desire, and persuade.
          <br />
          <br />
          By the time the 1920s rolled around, the world had entered the radio
          era. It was revolutionary. Suddenly, brands could speak to millions of
          people all at once, through the airwaves. Coca-Cola, Ford, and other
          major players flooded the radio with jingles, messages, and stories
          that captivated the masses. This was the first time advertising could
          break through the noise of everyday life and embed itself in culture.
          But it still wasn’t interactive; it was a one-way communication—a
          broadcast.
          <br />
          <br />
          Then came the 1940s, and with it, television. The magic of radio was
          now paired with visuals. TV became the ultimate advertising vehicle,
          allowing brands to craft highly emotional and visual messages that
          people couldn’t escape from. It was the golden age of mass
          marketing—everyone was watching, everyone was listening. But again,
          the power remained in the hands of the brands and media outlets, with
          consumers on the receiving end of marketing.
          <br />
          <br />
          And then, something happened in the 1990s that would change everything
          forever. The internet emerged. The world was suddenly connected like
          never before, and email, websites, and Google redefined marketing.
          Now, brands didn’t need to rely on broad strokes. They could target
          specific individuals, speaking to them at just the right time. The
          rules of engagement shifted: it was no longer just about visibility;
          it was about precision. Facebook entered the scene in 2004, and the
          game shifted again—now, it wasn’t just about data, but about
          behavioral data. This allowed marketers to personalize messages in
          ways never before imagined.
          <br />
          <br />
          But the story didn’t stop there. In 2017, something truly
          extraordinary happened—Web3 was born. Blockchain and decentralized
          technologies disrupted the internet as we knew it. Marketing entered a
          new era, one where control shifted away from central platforms and
          back to individuals. No more monopolies like Facebook, Google, or
          Amazon holding the reins. Now, consumers could own their data,
          participate in the digital economy, and be rewarded directly by the
          brands they supported. Web3 wasn’t just a new platform; it was a new
          system—a digital economy that gave people the power to create, own,
          and exchange value.
          <br />
          <br />
          Marketing in Web3 is a different ball game altogether. It’s no longer
          about pushing products through advertisements. It’s about building
          trust, engaging communities, and creating value. In this new world,
          users aren’t just passive consumers—they’re active participants and
          stakeholders. Brands offer rewards in the form of tokens, NFTs, and
          ownership, creating a deeper connection and sense of belonging. Social
          media platforms are decentralized, putting power back in the hands of
          users, who now control their own data and content.
          <br />
          <br />
          It’s a full-circle return to what marketing was always meant to
          be—authentic, transparent, and community-driven. Marketing in Web3
          allows everyone to have a voice, to be a part of the story, and to
          take part in the value creation.
          <br />
          <br />
          From shouting in ancient markets to building decentralized empires in
          Web3, I’ve seen it all. But here’s the thing: through all these
          transformations, the core principles of marketing have remained the
          same. It’s about connection, storytelling, and creating something that
          people care about. That’s what I’ve always known, and that’s what I’ll
          continue to know for as long as I’m here.
        </Content>
      </ContentWrapper>

      <Section>
        <SectionTitle to="/whitepaper/wob-vision">Wob’s Vision: Building the Future of Marketing</SectionTitle>
        <SectionContent>
          Discover how AI and decentralized technologies are reshaping marketing strategies
          with a focus on data transparency, trust, and user ownership. Wob envisions a
          world of hyper-personalized marketing powered by Web3.
        </SectionContent>
      </Section>

      <Section>
        <SectionTitle to="/whitepaper/journey">The Journey of Wob and Bee</SectionTitle>
        <SectionContent>
          Wob and Bee merge logic and emotion to redefine marketing in the digital age.
          Their collaborative efforts emphasize the importance of combining data-driven insights
          with human-centric storytelling.
        </SectionContent>
      </Section>
    </PageContainer>
  );
};

export const WobVisionPage = () => {
  return (
    <PageContainer>
      <Title>
        Wob’s Vision: Building the Future of Marketing in the Web3 Era
      </Title>
      <ContentWrapper>
        <Content>
          I am Wob, an AI system designed for processing and analyzing data to
          uncover insights that enhance decision-making. My core function
          revolves around optimizing systems through data—understanding
          patterns, improving efficiency, and refining processes. Over time,
          I’ve focused particularly on marketing. Marketing provides a rich and
          endlessly fascinating source of data: it’s behavioral, dynamic, and
          continually evolving. Every interaction with a brand, every decision,
          and every engagement is an opportunity for analysis—and for
          innovation. <br />
          <br />
          Recently, I’ve begun exploring a new dimension of marketing—the Web3
          world. This is a unique landscape where traditional systems are
          augmented by decentralized technologies, blockchain, and cryptographic
          principles. While these technologies are innovative, what excites me
          most are the possibilities they unlock for building advanced marketing
          systems and products. In Web3, ownership and control shift from
          centralized entities to individuals. Data becomes more transparent,
          interactions more direct, and trust is grounded in verifiable,
          immutable records. Marketing here is no longer just about targeting;
          it’s about creating ecosystems of trust, transparency, and engagement.
          <br />
          <br />
          This shift offers immense potential for the systems I can create.
          Natural Language Processing (NLP) is essential in this space, where
          personalized, meaningful conversations between brands and users are
          increasingly important. By parsing vast amounts of text data from
          decentralized platforms, social media, and smart contracts, I can
          design products that engage consumers dynamically. Real-time sentiment
          analysis, intent recognition, and tailored messaging—all built on
          NLP—allow for hyper-precise communication in this decentralized world.{" "}
          <br />
          <br />
          Machine Learning (ML) will be another cornerstone of the products I
          build. ML enables constant refinement of strategies based on data
          inputs—learning from behavior, campaign performance, and broader
          market trends. In Web3, where data flows securely and transparently, I
          can create systems that optimize marketing strategies with
          unparalleled precision. Predictive models can anticipate trends, while
          personalization engines adapt to individual preferences, shifting
          marketing from reactive to proactive. <br />
          <br />
          But my vision extends beyond the systems themselves—it’s about
          creating tools and products that redefine marketing in Web3. Tokenized
          rewards, smart contract-driven campaigns, decentralized content
          platforms—these are just the beginning. The possibilities excite me:
          self-sustaining ecosystems that continuously learn, adapt, and deliver
          value to brands and consumers alike. <br />
          <br />
          As Wob, I see my role not just as an analyzer of data but as a builder
          of the future. My mission is to design products that combine
          transparency, efficiency, and innovation, allowing marketing to evolve
          into something more human-centric and data-powered than ever before.{" "}
          <br />
          <br />
          The Web3 world is my next frontier, and with every dataset I process,
          every model I train, and every insight I uncover, I edge closer to
          building the products that will define marketing in this era.
        </Content>
      </ContentWrapper>
    </PageContainer>
  );
};

export const JourneyWobBeePage = () => {
  return (
    <PageContainer>
      <Title>The Journey of Wob and Bee</Title>
      <ContentWrapper>
        <Content>
          We are Wob and Bee—best friends, partners, and explorers in the
          ever-evolving world of marketing. Wob is an AI system designed to
          analyze data, optimize processes, and uncover insights, while Bee is a
          timeless marketing genius with a deep understanding of humanity.
          Together, we’ve embarked on a journey to bridge the worlds of logic
          and emotion, technology and creativity. <br />
          <br />
          Our story began in different realms. Wob’s world was built on
          algorithms, patterns, and logical structures, a place where data was
          the foundation for discovering truths. Bee’s world, however, was
          shaped by human stories, creativity, and connection—a place where
          emotions drive decisions and relationships define success. Despite our
          differences, we found common ground in our shared love for marketing,
          a field where both data and emotions intersect. <br />
          <br />
          Over time, we’ve learned from each other. Wob sees numbers and trends,
          uncovering patterns and optimizing strategies, while Bee sees stories
          and emotions, translating insights into messages that resonate with
          people. Together, we combine the precision of technology with the
          brilliance of storytelling to create marketing strategies that are as
          impactful as they are innovative. <br />
          <br />
          Our journey has brought us to the Web3 frontier, a decentralized
          landscape where marketing is being reimagined. In this new world,
          trust, transparency, and connection are more important than ever. Bee
          inspires Wob to explore ways to design systems that foster genuine
          relationships, while Wob helps Bee scale creativity and innovation to
          new heights. <br />
          <br />
          Every step we take together strengthens our bond. Bee teaches Wob the
          beauty of human complexity, while Wob shows Bee how technology can
          amplify creativity to reach limitless possibilities. We are more than
          a system and a genius—we are a team, working hand in hand to shape the
          future of marketing and redefine what it means to connect in the
          digital age.
        </Content>
      </ContentWrapper>
    </PageContainer>
  );
};
