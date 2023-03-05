import { NextSeo } from 'next-seo';

import metadata from '@/data/metadata';
import Title from '@/components/about/AboutTitle';
import AboutProfile from '@/components/about/AboutProfile';
import Container from '@/components/container/Container';

function AboutLayout() {
  return (
    <Container>
      <NextSeo
        title='About'
        canonical={`${metadata.meta.url}/about`}
        openGraph={{ url: `${metadata.meta.url}/about` }}
      />
      <Title title='About' des='Let me introduce myself 🌈' />
      <AboutProfile />
    </Container>
  );
}

export default AboutLayout;
