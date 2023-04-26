import {
  Name,
  Content,
  Position,
  ResumeCardContainer,
} from './ResumeCard.style';
import resumedata from '@/data/resumedata';

const ResumeCard = () => {
  return (
    <>
      {resumedata.experience.map((experience) => (
        <ResumeCardContainer key={experience.name}>
          <Name>{experience.name}</Name>
          <Position>
            {experience.position} | {experience.period}
          </Position>
          {experience.content.map((content) => (
            <Content key={content}> - {content}</Content>
          ))}
        </ResumeCardContainer>
      ))}
    </>
  );
};

export default ResumeCard;
