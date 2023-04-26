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
    typeof window !== 'undefined' ? document.body.dataset.theme : '',
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
            <ThemeModeImage
              alt="밝은 모드로 변경"
              src="https://cdn3.iconfinder.com/data/icons/spring-2-1/30/Sun-512.png"
            />
          ) : (
            <ThemeModeImage
              alt="어두운 모드로 변경"
              src="https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/moon_dark_mode_night-2-512.png"
            />
          )}
        </div>
        <Link href="/" passHref>
          {themeMode === 'dark' ? (
            <LogoImage
              src="https://cdn1.iconfinder.com/data/icons/line-christmas-icons/75/_house_snowglobe-512.png"
              alt="어두운 로고"
            />
          ) : (
            <LogoImage
              src="https://cdn1.iconfinder.com/data/icons/filled-line-christmas-icons/75/_house_snowglobe-512.png"
              alt="밝은 로고"
            />
          )}
        </Link>
      </Group>
    </HeaderContainer>
  );
};

export default Header;
