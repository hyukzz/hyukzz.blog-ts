import { Content, ContentTitle, ResumeCardContainer } from './ResumeCard.style';
import resumedata from '@/data/resumedata';

const ResumeSkillCard = () => {
  return (
    <>
      {resumedata.stack.map((stack, index) => {
        return (
          <ResumeCardContainer key={index}>
            <ContentTitle>{stack.stack}</ContentTitle>
            {stack.content.map((content, index) => (
              <Content key={index}> - {content}</Content>
            ))}
          </ResumeCardContainer>
        );
      })}
    </>
  );
};

export default ResumeSkillCard;
