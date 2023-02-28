import { DesText, TitleContainer, TitleText } from './AboutTitle.style';

const AboutTitle = ({ title, des }: { title: string; des: string }) => {
  return (
    <TitleContainer>
      <TitleText>{title}</TitleText>
      <DesText>{des}</DesText>
    </TitleContainer>
  );
};

export default AboutTitle;
