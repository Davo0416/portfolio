import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import skyRouteImg from "../../assets/SkyRoute.png";
import perfectPitchImg from "../../assets/PerfectPitch.png";
import aiLabRatImg from "../../assets/AILabRat.png";
import calculatorImg from "../../assets/Calculator.png";
import chessBotImg from "../../assets/ChessBot.png";

const ProjectsSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: ${theme.spacing.lg} 0;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: calc(${theme.spacing.xl} * 1.5);
  color: ${theme.colors.textLight};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${theme.colors.accent};
    border-radius: 2px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    margin-bottom: calc(${theme.spacing.xl} * 2);
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: ${theme.spacing.lg};
  width: 100%;
  margin-top: ${theme.spacing.lg};

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.xl};
    margin-top: ${theme.spacing.xl};
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 12px;
  overflow: hidden;
  color: ${theme.colors.textLight};
  transition: all ${theme.transitions.default};
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(145, 108, 198, 0.4);
  }
`;

const ProjectImage = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 180px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;

  @media (min-width: ${theme.breakpoints.md}) {
    height: 220px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(to top, ${theme.colors.glass.card}, transparent);
  }
`;

const ProjectContent = styled.div`
  padding: ${theme.spacing.md};
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.lg};
  }
`;

const ProjectTitle = styled.h3`
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.light};
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  color: ${theme.colors.textLight};
  margin-bottom: ${theme.spacing.lg};
  font-size: clamp(0.9rem, 2vw, 1rem);
  line-height: 1.6;
  flex: 1;
  opacity: 0.9;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
  margin-bottom: ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.sm};
    margin-bottom: ${theme.spacing.lg};
  }
`;

const TechTag = styled.span`
  background: ${theme.colors.glass.card};
  color: ${theme.colors.accent};
  padding: 4px 10px;
  border-radius: 20px;
  font-size: clamp(0.75rem, 2vw, 0.85rem);
  font-weight: 500;
  transition: all ${theme.transitions.default};

  @media (min-width: ${theme.breakpoints.md}) {
    padding: 6px 12px;
  }

  &:hover {
    background: ${theme.colors.gradient.accent};
    color: ${theme.colors.textDark};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(246, 177, 122, 0.2);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: auto;
  padding-top: ${theme.spacing.md};
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  
  a {
    color: ${theme.colors.accent};
    font-size: clamp(1rem, 2vw, 1.2rem);
    transition: all ${theme.transitions.default};
    padding: ${theme.spacing.xs};
    border-radius: 4px;
    
    &:hover {
      color: ${theme.colors.light};
      background: ${theme.colors.glass.card};
      transform: translateY(-2px);
    }
  }
`;

const projects = [
  {
    id: 1,
    title: "Sky Route",
    description: "This project is a responsive, interactive web application that features route planning with weather-aware navigation, allowing users to plan trips while considering current weather conditions.",
    image: skyRouteImg,
    techStack: ["React", "JavaScript", "MongoDB"],
    githubUrl: "https://github.com/Davo0416/Weather_Website_React",
    liveUrl: "https://skyroutereact.netlify.app/",
  },
  {
    id: 2,
    title: "Perfect Pitch",
    description: "A Web-based pitch detection service made to be a part of a college group project. Made using VSCode and Notepad++.",
    image: perfectPitchImg,
    techStack: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/Davo0416/PitchDetection",
    liveUrl: "https://davo0416.github.io/PitchDetection/",
  },
];

const aiProjects = [
  {
    id: 1,
    title: "AI Lab Rat",
    description: "A Unity WebGL game made using Unity2D, VSCode and Krita. The games goal is to help the AI mouse that is trained to follow the cheese placed by you to solve puzzles. It features 5 levels increasing in difficulty and utilising gameplay elements like switches, buttons and enemies.",
    image: aiLabRatImg,
    techStack: ["Unity", "C#", "Python"],
    githubUrl: "https://github.com/Davo0416/MouseAI",
    liveUrl: "Davo0416.github.io/MouseAI/",
  },
];

const appProjects = [
  {
    id: 1,
    title: "Java Calculator",
    description: "A simple calculator app made with Java and Apache Netbeans.",
    image: calculatorImg,
    techStack: ["Java", "Swing"],
    githubUrl: "https://github.com/Davo0416/JavaCalculator"
  },
  {
    id: 2,
    title: "Chess Bot App - Coming soon ...",
    description: "A simple chess app which core feature is going to be a homemade chess bot that you can play against.",
    image: chessBotImg,
    techStack: [],
    githubUrl: "https://github.com/Davo0416/QuasarBot"
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <ProjectsSection id="projects" role="region" aria-label="Featured Projects">
      <div className="container">
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 40 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          role="heading"
          aria-level={2}
        >
          Web Development Projects
        </SectionTitle>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ProjectGrid role="list">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              variants={itemVariants}
              role="listitem"
              aria-labelledby={`project-title-${project.id}`}
            >
              <ProjectImage 
                imageUrl={project.image} 
                role="img" 
                aria-label={`Screenshot of ${project.title}`} 
              />
              <ProjectContent>
                <ProjectTitle id={`project-title-${project.id}`}>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack role="list" aria-label={`Technologies used in ${project.title}`}>
                  {project.techStack.map((tech) => (
                    <TechTag key={tech} role="listitem">{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <FaGithub aria-hidden="true" />
                    <span className="sr-only">GitHub repository</span>
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title} live site`}
                  >
                    <FaExternalLinkAlt aria-hidden="true" />
                    <span className="sr-only">Live site</span>
                  </a>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
          </ProjectGrid>
        </motion.div>
      </div>
      <div className="container" style={{ marginTop: "1rem" }}>
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 40 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          role="heading"
          aria-level={2}
        >
          AI Projects
        </SectionTitle>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ProjectGrid role="list">
          {aiProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              variants={itemVariants}
              role="listitem"
              aria-labelledby={`project-title-${project.id}`}
            >
              <ProjectImage 
                imageUrl={project.image} 
                role="img" 
                aria-label={`Screenshot of ${project.title}`} 
              />
              <ProjectContent>
                <ProjectTitle id={`project-title-${project.id}`}>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack role="list" aria-label={`Technologies used in ${project.title}`}>
                  {project.techStack.map((tech) => (
                    <TechTag key={tech} role="listitem">{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <FaGithub aria-hidden="true" />
                    <span className="sr-only">GitHub repository</span>
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title} live site`}
                  >
                    <FaExternalLinkAlt aria-hidden="true" />
                    <span className="sr-only">Live site</span>
                  </a>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
          </ProjectGrid>
        </motion.div>
      </div>
      <div className="container" style={{ marginTop: "1rem" }}>
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 40 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          role="heading"
          aria-level={2}
        >
          App Development Projects
        </SectionTitle>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ProjectGrid role="list">
          {appProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              variants={itemVariants}
              role="listitem"
              aria-labelledby={`project-title-${project.id}`}
            >
              <ProjectImage 
                imageUrl={project.image} 
                role="img" 
                aria-label={`Screenshot of ${project.title}`} 
              />
              <ProjectContent>
                <ProjectTitle id={`project-title-${project.id}`}>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack role="list" aria-label={`Technologies used in ${project.title}`}>
                  {project.techStack.map((tech) => (
                    <TechTag key={tech} role="listitem">{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <FaGithub aria-hidden="true" />
                    <span className="sr-only">GitHub repository</span>
                  </a>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
          </ProjectGrid>
        </motion.div>
      </div>
    </ProjectsSection>
  );
};

export default Projects;
