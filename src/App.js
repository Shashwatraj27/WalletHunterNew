import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Routes and Route
import Hero from "./components/sections/Hero";
import Partners from "./components/sections/Partners";
import Services from "./components/sections/Services";
import Pricing from "./components/sections/Pricing";
import Products from "./components/sections/Products";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import WhitepaperPage from "./components/whitepaper/WhitepaperPage"; // Import the new WhitepaperPage component
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { WobVisionPage,JourneyWobBeePage,BeeStoryPage } from "./components/StoryPages";
import WalletShowsPage from "./components/whitepaper/WalletShowsPage"
import BlogsPage from "./components/blog/BlogsPage";
import BlogDetail from "./components/blog/BlogDetail";
import CaseStudy from "./components/casestudy/CaseStudy";
import CaseStudyDetails, { ModeNetworkCaseStudy, QgovTokenCaseStudy } from "./components/casestudy/CaseStudyDetails";

// Styled components
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(201, 32, 184, 0) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
`;

const CookieModal = styled.div`
  position: fixed;
  bottom: 0%;
  left: -350%;
  z-index: 9999;
  width: 700%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 200px;
  padding: 150px;

  .modal-content {
    background-color: #f1f1f1;
    border-radius: 12px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .modal-header {
    display: none;
  }

  .modal-body {
    font-size: 14px;
    text-align: center;
    color: #333;
  }

  .modal-footer {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
  }

  .btn-primary {
    background-color: #60b7cd;
    border: none;
    font-size: 14px;
    width: 45%;
  }

  .btn-outline-primary {
    border-color: #000000;
    color: #000000;
    font-size: 14px;
    width: 45%;
  }

  .btn-outline-primary:hover {
    background-color: #000000;
    color: white;
  }

  .btn-primary:hover {
    background-color: #0056b3;
  }

  .cookie-icon {
    font-size: 2.5rem;
    color: #60b7cd;
  }

  a {
    color: #007bff;
    text-decoration: underline;
    font-size: 12px;
  }

  a:hover {
    color: #0056b3;
  }
`;

function App() {
  const [showModal, setShowModal] = useState(true); // State to control modal visibility

  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          {/* Define routes */}
          <Route
            path="/"
            element={
              <Body>
                <div>
                  <Hero />
                  <Wrapper>
                    <Partners />
                    <Services />
                  </Wrapper>
                  <Products />
                  <Wrapper>
                    <Pricing />
                    <Contact />
                  </Wrapper>
                  <Footer />
                </div>
              </Body>
            }
          />
          <Route path="/whitepaper" element={<WhitepaperPage />} />

          <Route path="/whitepaper/bee-story" element={<BeeStoryPage />} />
        <Route path="/whitepaper/wob-vision" element={<WobVisionPage />} />
        <Route path="/whitepaper/journey" element={<  JourneyWobBeePage />} />
        <Route path="/walletshows" element={< WalletShowsPage />} />
        <Route path="/Blog"  element={< BlogsPage />}/>
        
        <Route path="/Blog/:slug" element={<BlogDetail />} />
        <Route path="/casestudy" element={<CaseStudy />} />
        <Route path="/casestudy/qgov-case-study" element={<QgovTokenCaseStudy />} />
        <Route path="/casestudy/mode-network-case-study" element={<ModeNetworkCaseStudy />} />
        </Routes>
        

        {/* Cookie Consent Modal */}
        {showModal && (
          <CookieModal
            className="modal fade show"
            id="cookieconsent2"
            tabIndex="-1"
            aria-labelledby="cookieconsentLabel2"
            aria-hidden="false"
            style={{ display: "block" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="row">
                    <div className="col-3 d-flex align-items-center justify-content-center">
                      <i className="fas fa-cookie-bite cookie-icon"></i>
                    </div>
                    <div className="col-9">
                      <p>
                        This website uses cookies to ensure you get the best
                        experience on our website.{" "}
                        <a href="#">Read more about cookies</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => setShowModal(false)} // Close modal on reject
                  >
                    Reject
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      setShowModal(false); // Close modal on accept
                      console.log("Cookies accepted!");
                    }}
                  >
                    Accept
                  </button>
                </div>
              </div>
            </div>
          </CookieModal>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
