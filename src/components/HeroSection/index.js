import React from "react";
import HeroBgAnimation from "../HeroBgAnimation";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  ResumeButton,
} from "./HeroStyle";
import HeroImg from "../../images/simple.jpg";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";


const HeroSection = () => {
  const openResumeInNewTab = () => {
    const resumeUrl = `${window.location.origin}/resume.html`;
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
              Hi, I am <br /> <span style={{ color: '#D100FF' }}>Rishabh</span>&nbsp;Mittal
            </Title>
            <TextLoop>
              I am a
              <Span style={{ color: '#D100FF' }}>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                  
                />
              </Span>
            </TextLoop>
            <SubTitle style={{ color: '#778899'}}>{Bio.description}</SubTitle>
            <ResumeButton onClick={openResumeInNewTab}>Resume</ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img src={HeroImg} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;