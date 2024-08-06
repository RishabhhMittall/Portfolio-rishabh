import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'

const Projects = ({openModal, setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  const [toggleCount, setToggleCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3
      }
    }
  };

  const childVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 50,
        duration: 1
      }
    }
  };

  return (
    <Container id="projects" ref={ref}>
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          <Title>Projects</Title>
          <Desc>
            I have worked on a wide range of projects. Here are some of my projects.
          </Desc>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <ToggleButtonGroup>
            {['all', 'web app', 'clone'].map((item, index) => (
              <React.Fragment key={item}>
                {index !== 0 && <Divider />}
                <ToggleButton
                  active={toggle === item}
                  value={item}
                  onClick={() => {
                    setToggle(item);
                    setToggleCount(prev => prev + 1);
                  }}
                >
                  {item.toUpperCase()}
                </ToggleButton>
              </React.Fragment>
            ))}
          </ToggleButtonGroup>
        </motion.div>
        <motion.div
          key={toggleCount}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <CardContainer>
            {(toggle === 'all' ? projects : projects.filter((item) => item.category === toggle))
              .map((project, index) => (
                <motion.div key={project.id} variants={childVariants}>
                  <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
                </motion.div>
              ))}
          </CardContainer>
        </motion.div>
      </Wrapper>
    </Container>
  )
}

export default Projects