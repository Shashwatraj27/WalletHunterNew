import React from "react";

import styled from "styled-components";

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

// QGOV Token Case Study Component
export const QgovTokenCaseStudy = () => {
  return (
    <PageContainer>
      <Title>QGOV Token Pre-sale Success on LaunchBlock</Title>

      <ContentWrapper>
        <Content>
          {`The QGOV token pre-sale was a remarkable success, thanks to a
          well-structured marketing plan and robust investor engagement. The
          project leveraged influencer marketing, community-driven promotions,
          and strategic partnerships to gain traction.`}
        </Content>
      </ContentWrapper>
    </PageContainer>
  );
};

// Mode Network Case Study Component
export const ModeNetworkCaseStudy = () => {
  return (

    <PageContainer>
      <Title>Mode Network Marketing Strategy and Airdrop Campaign</Title>

      <ContentWrapper>
        <Content>
Objective
<br />
Brand Awareness: Increase visibility within the crypto community.
Attract Developers: Encourage developers to build on Mode Network.
User Base Growth: Grow the user base by speculating an airdrop.
Educate Audience: Inform the audience about Mode Network’s features and benefits. 

<br /><br />
Strategy Implementation: 
<br />
Galxe Quest Campaign:(galxe quest)
Duration: 11 weeks.
Platform: Testnet.
Activities: Participants completed tasks and earned points, with rewards based on performance.
Social Media Engagement:
High-Engagement Tweet: Shared updates and explained in simple words
KOL Tweets: KOL’s Tweets
Founder & Team Threads: threads from founders explaining the product.
Community Engagement Tweets: Interactive posts to engage followers. Quiz or teasing.
Developer Engagement:
Devnet Launch: Provided a platform for developers to start building.
Tutorials: Created guides for deploying contracts and bridges.
Grants: Offered support for projects to build on Mode Network.
Mode Ambassador Program: Introduced a program where participants received NFTs. link
IRL Events: Organised events and participated in major events.
50 ETH Giveaway for community: Hosted a community event on friend.tech link
Defi Hackathon for developers: Organised a hackathon with prizes to encourage development. link
Content and Educational Initiatives:
Articles and AMAs: Published informative articles and hosted AMAs to educate the audience.
Threads and Tutorials: Shared detailed threads and tutorials to explain Mode Network’s functionalities.
Campaign on Layer3: Featured on-chain tasks that allowed users to earn rewards.
Announcements: Shared updates on funding, grants, partnerships, and protocol launches to keep the community informed and engaged.
Airdrop Campaign:
Airdrop Announcement: Created hype around the upcoming airdrop.link
Early Access: Announced early access to the airdrop.
Refer and Earn: Enhanced the airdrop campaign with a referral program.
Multiplier Points: Offered additional points for early deposits and other specific actions.
Dev Drop: Announced a drop specifically for developers contributing to the network. link

<br /><br />
Results
Increased Brand Awareness:
Grew Twitter followers to 300K.
Significant engagement on social media posts.
Developer Attraction:
Successful Devnet launch with active participation from developers.
Positive feedback and participation in grants and hackathons.
User Base Growth:
Effective airdrop campaign led to increased user base.
High participation in referral and early deposit programs.
Community Engagement:
Active and engaged community with regular interactions and feedback.
Successful in-person events and AMAs that strengthened community bonds.
Educational Impact:
Increased awareness and understanding of Mode Network’s features and benefits.
High engagement with educational content such as threads, articles, and tutorials.
Conclusion
Mode Network successfully implemented a comprehensive marketing strategy that significantly increased brand awareness, attracted developers, grew the user base, and educated the audience. The combination of engaging social media activities, developer incentives, and a well-structured airdrop campaign created a strong foundation for Mode Network’s growth and adoption in the blockchain space
Most Engagement:
Tweet Link  Comment: 854 Retweet:1.5k  Like: 2.6k
Tweet Link  Comment: 303 Retweet: 246  Like: 1k
KOL Tweets
Tweet Link Comment:161  Retweet: 222  Like: 895 
Tweet Link Comment:80   Retweet:200  Like: 600
Tweet Link Comment:50  Retweet:90  Like: 270
Tweet Link Comment:63  Retweet:139  Like: 400
Investor
6m$ from Optimism
Twitter Space
Mode X Optimism
Mode X Etherfi
Mode X Velodrome
Mode X Izumi
Mode X Renzo
AMA with Defi Dad link
IRL invents
Eth Global
Devconnect Link
        </Content>
      </ContentWrapper>
    </PageContainer>

   
  );
};

// Common styles
const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "black",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    textAlign: "center",
  },
  content: {
    maxWidth: "800px",
    width: "100%",
    backgroundColor: "#1e1e1e",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "left",
  },
  header: {
    position: "sticky",
    top: "0",
    backgroundColor: "#1e1e1e",
    padding: "10px 0",
    width: "100%",
    zIndex: "100",
    textAlign: "center",
    borderBottom: "2px solid #60a5fa",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#60a5fa",
  },
  scrollContent: {
    maxHeight: "400px",
    overflowY: "auto",
    padding: "10px 0",
  },
  description: {
    fontSize: "16px",
    color: "#cbd5e1",
    lineHeight: "1.6",
    marginBottom: "15px",
  },
};
