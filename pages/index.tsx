import Container from '@/components/container/Container';
import dynamic from 'next/dynamic';

const HomeProfile = dynamic(
  () => import('@/components/homeprofile/HomeProfile'),
  {
    ssr: false,
  }
);

function Home() {
  return (
    <Container>
      <>
        <HomeProfile />
      </>
    </Container>
  );
}

export default Home;
