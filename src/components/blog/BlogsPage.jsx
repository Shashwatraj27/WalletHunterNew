import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  {
    title: "Unlocking the Potential of Meme Coins: Strategies for Effective Marketing",
    description:
      "Meme coins have evolved from internet jokes to major crypto players, with Dogecoin and Shiba Inu leading the trend. In early 2024, their total market cap hit $20 billion, proving their growing influence in the crypto space.",
    slug: "unlocking-meme-coins-strategies-marketing",
  },
  {
    title: "Starting NFT Marketing: A Comprehensive Beginner’s Guide",
    description:
      "NFT marketing involves promoting and selling unique digital assets on the blockchain. It focuses on raising awareness and attracting buyers through targeted strategies and platforms.",
    slug: "starting-nft-marketing-beginners-guide  ",
  },
  {
    title: "The Power of Referral Programs: How They Work and How to Create One",
    description:
      "Referral programs are a powerful way to expand reach, boost brand awareness, and build customer loyalty. By leveraging word-of-mouth marketing, businesses turn satisfied customers into brand ambassadors, attracting high-value new clients.",
    slug: "referral-programs-power-how-to-create",
  },
  {
    title: "Web3 Social media brand building ",
    description:
      "A strong Web3 brand goes beyond a logo or name—it’s about crafting an identity that stands out through innovation, trust, and community engagement. Here’s how to build one",
    slug: "web3-social-media-brand-building",
  },
  {
    title: "Crypto YouTube Promotion: A Guide to Success",
    description:
      "Crypto YouTube marketing helps promote blockchain projects by creating engaging videos that attract investors and enthusiasts. With fierce competition, success requires well-crafted, compelling content.",
    slug: "crypto-youtube-promotion-guide-success",
  },
  
];

function BlogsPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "black", color: "white", padding: "50px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", fontSize: "3rem", marginTop: "60px", fontWeight: "bold", marginBottom: "40px" }}>BLOGS</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        justifyContent: "center",
        maxWidth: "1200px",
        margin: "auto"
      }}>
        {blogs.map((blog, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#222",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(255, 255, 255, 0.2)",
              transition: "transform 0.3s",
              border: "1px solid #444",
              cursor: "pointer",
              animation: `fadeIn ${1 + index * 0.3}s ease-out`,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>{blog.title}</h2>
            <p style={{ color: "lightgray" }}>{blog.description}</p>
            <Link to={`/blog/${blog.slug}`} style={{ color: "cyan", textDecoration: "none", fontWeight: "bold", display: "block", marginTop: "10px" }}>
              Read More
            </Link>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (min-width: 1024px) {
            div > div {
              grid-template-columns: repeat(4, 1fr);
            }
          }
        `}
      </style>
    </div>
  );
}

export default BlogsPage;
