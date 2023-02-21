import { NextSeo } from 'next-seo';

import Container from '@/components/container/Container';
import ResumeAbout from '@/components/resume/ResumeAbout';
import ResumeTitle from '@/components/resume/ResumeTitle';
import ResumeCard from '@/components/resume/ResumeCard';
import ResumeStackCard from '@/components/resume/ResumeStackCard';
import { ResumeContent } from './resume.style';
import metadata from '@/data/metadata';

function ResumeLayout() {
  return (
    <Container>
      <NextSeo
        title='Resume'
        description='Resume of my experience and stacks'
        canonical={`${metadata.meta.url}/resume`}
        openGraph={{ url: `${metadata.meta.url}/resume` }}
      />
      <ResumeContent>
        <ResumeAbout />
        <ResumeTitle title={'🧑🏻‍💻 Experience.'} />
        <ResumeCard />
        <ResumeTitle title={'🛠 Stacks.'} />
        <ResumeStackCard />
      </ResumeContent>
    </Container>
  );
}

export default ResumeLayout;
