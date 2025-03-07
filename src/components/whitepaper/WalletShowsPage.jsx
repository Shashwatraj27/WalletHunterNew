import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Grid,
  Box,
  useMediaQuery,
} from "@mui/material";
import first from "../../images/walletshows/first_show_image.jpg"
import second from "../../images/walletshows/second_show_image.jpg";
import third from "../../images/walletshows/third_show_image.jpg";
import fourth from "../../images/walletshows/fourth_show_image.jpg";
import fifth from "../../images/walletshows/fifth_show_image.jpeg";

const shows = [
  {
    title:
      "Latest Episodes:- Web3 Innovation: The Future of Gasless Smart Wallets",
    description:
      "In this exciting episode, we sit down with Rohit, the visionary behind WalletX, a game-changing gasless smart wallet that allows users to execute transactions across major EVM networks without paying gas fees. WalletX brings next-level security, flexibility, and innovative monetization through its unique P2P advertisement layer, setting the stage for the future of Web3 interactions.",
    link: "https://www.linkedin.com/events/web3innovation-episode59-thefut7255077917930455040",
    image: first,
  },
  {
    title: "Web3 Innovation: Driving Blockchain Adoption and Fintech Transf",
    description:
      "Join us for an exciting episode with Tarusha Mittal, co-founder of dapps.co and producer of Living on Blockchain! A Web3 pioneer, Tarusha has led groundbreaking innovations in blockchain and DeFi. From launching one of India’s first Ethereum exchanges to building leading fintech platforms, she’s shaping the future of Web3.",
    link: "https://www.linkedin.com/events/web3innovation-episode57-drivin7246951541499142144/theater/",
    image: second,
  },
  {
    title: "Watch & Earn: The Future of Streaming on Earn.TV",
    description:
      "Join us for an exciting episode with Pascal Vallat, founder of Earn.tv! With 20 years in marketing and blockchain, he’s revolutionizing streaming—where watching pays off. Discover how Earn.tv’s blockchain-powered platform rewards viewers and transforms content distribution. Don’t miss it! 🎬💡",
    link: "https://www.linkedin.com/events/episode49-watch-earn-thefutureo7219047468968157184/theater/",
    image: third,
  },
  {
    title: "Unifying Crypto Transactions for Seamless Trade",
    description:
      "Join us in this exciting episode as we sit down with Paycio’s visionary Founder, Bibin, and Aklesh from the community team to explore how Paycio is transforming the world of crypto payments. Discover how their Unified Crypto Payment Interface (UCPI) enables fast, secure, and simplified transactions for C2C, B2B, and B2C users. Learn about the future of crypto payments, the challenges in the space, and how Paycio is leading the way in building a safer, more unified payment system for everyone.",
    link: "https://www.linkedin.com/events/episode57-unifyingcryptotransac7245429695012372480/theater/",
    image: fourth,
  },
  {
    title: "Get Going on Bitcoin Halving!",
    description: "Watch our latest shows and interviews",
    link: "https://www.linkedin.com/events/getgoingonbitcoinhalving-episod7186627349600178177/theater/",
    image: fifth,
  },
];

const WalletShowsPage = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#121212",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px 0",
      }}
    >
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
        `}
      </style>

      {/* Title section (Fixed at the top) */}
      <Box
        sx={{
          width: "100%",
          position: "sticky",
          top: 0,
          backgroundColor: "#121212",
          zIndex: 10,
          padding: "10px 0",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "#ffffff", marginTop: "80px" }}
        >
          Wallet Shows
        </Typography>
      </Box>

      {/* Scrollable content area */}
      <Container
        maxWidth="lg"
        sx={{
          flex: 1,
          overflowY: "auto",
          height: "85vh",
          paddingY: 2,
          "&::-webkit-scrollbar": {
            display: "none", // Hide scrollbar for WebKit browsers
          },
          scrollbarWidth: "none", // Hide scrollbar for Firefox
        }}
      >
        <Grid container spacing={3}>
          {shows.map((show, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card style={{ animation: `fadeIn ${1 + index * 0.5}s ease-out` }}
                sx={{
                  backgroundColor: "#1e1e1e",
                  color: "white",
                  alignItems: "center",
                  padding: "12px",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                    border: "1px solid gray",
                  }}
                  image={show.image}
                  alt={show.title}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ color: "#ffffff" }}>
                    {show.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#b0b0b0" }}>
                    {show.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WalletShowsPage;
