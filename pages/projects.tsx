import { NextSeo } from 'next-seo';

import Title from '@/components/title/Title';
import projects from '@/data/projects';
import ProjectCards from '@/components/project/ProjectCard';
import Container from '@/components/container/Container';
import metadata from '@/data/metadata';

function Projectspage() {
  return (
    <Container>
      <NextSeo
        title="Projects"
        description="프로젝트들을 기록하는 공간입니다."
        canonical={`${metadata.meta.url}/projects`}
        openGraph={{ url: `${metadata.meta.url}/projects` }}
      />
      <Title title="Projects" des={`프로젝트들을 기록하는 공간입니다.`} />
      <ProjectCards projects={projects} />
    </Container>
  );
}

export default Projectspage;
