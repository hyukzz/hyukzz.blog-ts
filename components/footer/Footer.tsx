import {
  BlogInfo,
  Copyright,
  FooterContainer,
  SocialIcon,
  SocialIconWrap,
} from './Footer.style';
import metadata from '@/data/metadata';

const Footer = () => {
  return (
    <FooterContainer>
      <SocialIconWrap>
        {metadata.social.github && (
          <a href={metadata.social.github} target='_blank' rel='noreferrer'>
            <SocialIcon
              src='https://cdn-icons-png.flaticon.com/512/5968/5968896.png'
              alt='github'
            />
          </a>
        )}
        {metadata.social.notion && (
          <a href={metadata.social.notion} target='_blank' rel='noreferrer'>
            <SocialIcon
              src='https://cdn-icons-png.flaticon.com/512/9278/9278907.png'
              alt='notion'
            />
          </a>
        )}
        {metadata.social.velog && (
          <a href={metadata.social.velog} target='_blank' rel='noreferrer'>
            <SocialIcon
              src='https://pbs.twimg.com/profile_images/1228368893321736193/Ov0og7E8_400x400.jpg'
              alt='velog'
            />
          </a>
        )}
        {metadata.social.email && (
          <a href={metadata.social.email} target='_blank' rel='noreferrer'>
            <SocialIcon
              src='https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-1024.png'
              alt='google-email'
            />
          </a>
        )}
      </SocialIconWrap>
      <Copyright>
        Copyright © {new Date().getFullYear()} {metadata.author}
      </Copyright>
      <BlogInfo href={metadata.repo} rel='noreferrer'>
        hyukzz-blog
      </BlogInfo>
    </FooterContainer>
  );
};

export default Footer;
