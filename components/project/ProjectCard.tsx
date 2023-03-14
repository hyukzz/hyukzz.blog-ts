import Image from 'next/image';

import { Project } from '@/types/types';
import {
  ProjectCard,
  ProjectCardContent,
  ProjectCardDes,
  ProjectCardsContainer,
  ProjectCardTitle,
} from './ProjectCards.style';

const ProjectCards = ({ projects }: { projects: Project[] }) => {
  return (
    <ProjectCardsContainer>
      {projects.map((project) => (
        <a href={project.url} target="_blank" rel="noreferrer" key={project.id}>
          <ProjectCard>
            <Image
              src={project.image}
              className="round-image"
              alt={project.title}
              width={300}
              height={200}
            />
            <ProjectCardContent>
              <ProjectCardTitle>{project.title}</ProjectCardTitle>
              <ProjectCardDes>{project.description}</ProjectCardDes>
            </ProjectCardContent>
          </ProjectCard>
        </a>
      ))}
    </ProjectCardsContainer>
  );
};

export default ProjectCards;
