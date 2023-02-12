import Head from 'next/head';
import { ContainerContainer, Main } from './Container.style';
import Footer from '@/components/footer/Footer';
<<<<<<< HEAD
import GoogleAnalytics from '@/components/google/GoogleAnalytics';
=======
// import GA from './GA';
>>>>>>> d9582d58435ffb5d43aed8a5376cdac11056f8fd
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@/components/header/Header'), {
  ssr: false,
});

const Container = ({ children }) => {
  return (
    <>
      <Head>
        <meta content='width=device-width, initial-scale=1' name='viewport' />
      </Head>
      <GoogleAnalytics />
      <ContainerContainer>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </ContainerContainer>
    </>
  );
};

export default Container;
