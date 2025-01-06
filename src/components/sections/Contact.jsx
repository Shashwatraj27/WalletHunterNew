import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import backgroundVideo from "../../images/background.mp4"; // Import your video file

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0;
  overflow: hidden; /* Ensures video doesn't spill out */
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the video covers the entire area */
  z-index: -1; /* Places the video behind the content */
  opacity: 0.5; /* Adjust transparency for better text visibility */
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
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 700;
  margin-top: 40px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 20px;
    font-size: 36px;
  }
`;

const Desc = styled.div`
  font-size: 20px;
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 40px;
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

const ContactForm = styled.form`
  width: 90%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.2); /* Semi-transparent for visibility */
  backdrop-filter: blur(10px); /* Blur effect for modern look */
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 40px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  gap: 16px;
`;

const ContactTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 8px;
  padding: 14px;
  transition: all 0.3s ease;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const ContactInputMessage = styled.textarea`
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 8px;
  padding: 14px;
  transition: all 0.3s ease;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const ContactButton = styled.input`
  background-color: #60b7cd;
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  padding: 14px;
  transition: all 0.3s ease;
  &:hover {
    background-color: #2980b9;
    cursor: pointer;
  }
`;

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tox7kqs",
        "template_nv7k7mj",
        form.current,
        "SybVGsYS52j2TfLbi"
      )
      .then(
        (result) => {
          alert("Message Sent");
          form.current.reset();
        },
        (error) => {
          alert(error);
        }
      );
  };

  return (
    <Container id="Contact">
      <BackgroundVideo src={backgroundVideo} autoPlay loop muted />
      <Wrapper>
        <Title>Contact Us</Title>
        <Desc>We would love to hear from you!</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Us</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" required />
          <ContactInput placeholder="Your Name" name="from_name" required />
          <ContactInput placeholder="Subject" name="subject" required />
          <ContactInputMessage
            placeholder="Message"
            name="message"
            rows={6}
            required
          />
          <ContactButton type="submit" value="Send Message" />
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
