import { NextSeo } from 'next-seo';

import Container from '@/components/container/Container';
import metadata from '@/data/metadata';
import HomeProfile from '@/components/homeprofile/HomeProfile';

function Home() {
  return (
    <Container>
      <NextSeo
        title="home"
        description="정윤혁의 블로그입니다."
        canonical={`${metadata.meta.url}`}
        openGraph={{ url: `${metadata.meta.url}` }}
      />
      <HomeProfile />
    </Container>
  );
}

export default Home;
