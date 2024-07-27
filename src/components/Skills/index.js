import React, { useCallback, useRef } from "react";
import { skills } from "../../data/constants";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  SkillsContainer,
  Skill,
  SkillList,
  SkillItem,
  SkillImage,
  SkillTitle
} from "./SkillsStyledComponents";

const Skills = () => {
  const handleMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = -(x - centerX) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    
    // Update mouse position for highlight effect
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  }, []);

  const handleMouseLeave = useCallback((e) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  }, []);

  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Here are some of my skills on which I have been working on.
        </Desc>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <Skill 
              key={index} 
              onMouseMove={handleMouseMove} 
              onMouseLeave={handleMouseLeave}
            >
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item, itemIndex) => (
                  <SkillItem key={itemIndex}>
                    <SkillImage src={item.image} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;