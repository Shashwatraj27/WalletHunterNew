import React from "react";
import { useNavigate } from "react-router-dom";

const CaseStudy = () => {
  const navigate = useNavigate();

  // Case Study Data
  const caseStudies = [
    {
      id: "qgov-case-study", // Updated ID to match your routing
      title: "QGOV Token Pre-sale Success on LaunchBlock",
      description: `
Wallet Hunter team spearheaded the promotional campaign for the pre-sale of Q Protocol’s $QGOV tokens on LaunchBlock. Our strategic efforts resulted in a complete sell-out within a week.

      `,
    },
    {
      id: "mode-network-case-study", // Matches your route path
      title: "Mode Network Marketing Strategy and Airdrop Campaign",
      description: `
Mode Network successfully implemented a comprehensive marketing strategy that significantly increased brand awareness, attracted developers, grew the user base, and educated the audience. The combination of engaging social media activities, developer incentives, and a well-structured airdrop campaign created a strong foundation for Mode Network’s growth and adoption in the blockchain space.
      `,
    },
  ];

  // Styles
  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "black",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
    },
    content: {
      maxWidth: "800px",
      textAlign: "center",
      width: "100%",
      maxWidth: "90%",
    },
    title: {
      fontSize: "32px",
      fontWeight: "bold",
      color:"rgba(73, 189, 246, 0.99)",
      marginTop: "40px",
      marginBottom: "20px",
    },
    caseCard: {
      backgroundColor: "#1e1e1e",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      marginBottom: "20px",
      textAlign: "left",
      transition: "transform 0.2s ease-in-out",
      cursor: "default",
    },
    caseCardHover: {
      transform: "scale(1.02)",
    },
    caseTitle: {
      fontSize: "24px",
      fontWeight: "600",
      color:"rgba(73, 189, 246, 0.99)",
    },
    description: {
      color: "#9ca3af",
      marginTop: "10px",
      fontSize: "16px",
      lineHeight: "1.6",
      whiteSpace: "pre-line",
    },
    button: {
      marginTop: "15px",
      backgroundColor:  "rgba(73, 189, 246, 0.99)",
      color: "white",
      fontSize: "16px",
      fontWeight: "bold",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background 0.3s ease",
    },
    buttonHover: {
      backgroundColor:  "#60a5fa",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Case Studies</h1>

        {/* Dynamically Render Case Studies */}
        {caseStudies.map((caseStudy) => (
          <div
            key={caseStudy.id}
            style={styles.caseCard}
            onMouseEnter={(e) => (e.currentTarget.style.transform = styles.caseCardHover.transform)}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
          >
            <h2 style={styles.caseTitle}>{caseStudy.title}</h2>
            <p style={styles.description}>{caseStudy.description}</p>
            <button
              style={styles.button}
              onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
              onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
              onClick={() => navigate(`/casestudy/${caseStudy.id}`)} // Corrected navigation path
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudy;
