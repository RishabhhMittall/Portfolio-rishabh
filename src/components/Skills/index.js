import React, { useCallback, useRef } from "react";
import { motion, useInView } from "framer-motion";
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
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

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
    
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  }, []);

  const handleMouseLeave = useCallback((e) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      }
    }
  };

  const skillVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100 
      }
    }
  };

  return (
    <Container id="skills" ref={containerRef}>
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1.0 }}
        >
          <Title>Skills</Title>
          <Desc>
            Here are some of my skills on which I have been working on.
          </Desc>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          
        >
          <SkillsContainer>
            {skills.map((skill, index) => (
              <motion.div key={index} variants={skillVariants}>
                <Skill 
                  onMouseMove={handleMouseMove} 
                  onMouseLeave={handleMouseLeave}
                  style={{ height: '100%' }}  // Ensure consistent height
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
              </motion.div>
            ))}
          </SkillsContainer>
        </motion.div>
      </Wrapper>
    </Container>
  );
};

export default Skills;