import Title from '@/components/title/Title';
import AboutProfile from '@/components/about/AboutProfile';
import Container from '@/components/container/Container';
import metadata from '@/data/metadata';
import { NextSeo } from 'next-seo';

function About() {
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

export default About;
