import Container from '@/components/container/Container';
import dynamic from 'next/dynamic';

const HomeProfile = dynamic(
  () => import('@/components/homeprofile/HomeProfile'),
  {
    ssr: false,
  }
);

function Homepage() {
  return (
    <Container>
      <>
        <HomeProfile />
      </>
    </Container>
  );
}

export default Homepage;
