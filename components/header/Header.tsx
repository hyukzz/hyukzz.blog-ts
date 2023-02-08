import {
  Group,
  HeaderContainer,
  LogoImage,
  ThemeModeImage,
} from './Header.style';
import Nav from '../nav/Nav';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Header = () => {
  const [themeMode, setThemeMode] = useState<string>(
    typeof window !== 'undefined' ? document.body.dataset.theme : ''
  );

  useEffect(() => {
    document.body.dataset.theme = themeMode;
    window.localStorage.setItem('theme', themeMode);
  }, [themeMode]);

  const themeModeHandle = (e: React.MouseEvent) => {
    e.preventDefault();
    setThemeMode(themeMode === 'dark' ? 'light' : 'dark');
  };

  return (
    <HeaderContainer>
      <Nav />
      <Group>
        <div onClick={themeModeHandle}>
          {themeMode === 'dark' ? (
            <ThemeModeImage alt='밝은 모드로 변경' src='' />
          ) : (
            <ThemeModeImage alt='어두운 모드로 변경' src='' />
          )}
        </div>
        <Link href='/' passHref>
          {themeMode === 'dark' ? (
            <LogoImage src='' alt='어두운 로고' />
          ) : (
            <LogoImage src='' alt='밝은 로고' />
          )}
        </Link>
      </Group>
    </HeaderContainer>
  );
};

export default Header;
