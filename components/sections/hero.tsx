import Wrapper from "components/shared/wrapper";
import Title from "theme/typography/title";
import React from "react";
import styled from "styled-components";
import Paragraph from "theme/typography/paragraph";
import EnvelopeIcon from "components/icons/envelope-icon";
import LinkedinIcon from "components/icons/linkedin-icon";
import { motion } from "framer-motion";

const StyledWrapper = styled(Wrapper)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1em;
  gap: 1em;
  height: 50px;
`;

const StyledEnvelop = styled(EnvelopeIcon)`
  display: block;
  height: 50px;
`;

const StyledLinkedin = styled(LinkedinIcon)`
  display: block;
  height: 50px;
`;

const Link = styled.a`
  cursor: pointer;
`;

const Hero = () => {
  return (
    <StyledWrapper
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div>
        <Title>Koen de Bruijn</Title>
        <Paragraph>This website is still under construction 🚧</Paragraph>

        <IconContainer>
          <Link href='mailto:info@koendebruijn.com'>
            <StyledEnvelop />
          </Link>
          <Link
            href='https://www.linkedin.com/in/koen-de-bruijn-334138183/'
            target='_blank'
          >
            <StyledLinkedin />
          </Link>
        </IconContainer>
      </div>
    </StyledWrapper>
  );
};

export default Hero;
