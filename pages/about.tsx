import AboutTitle from '@/components/about/AboutTitle';
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
      <AboutTitle title='About' des='Let me introduce myself 🌈' />
      <AboutProfile />
    </Container>
  );
}

export default About;
