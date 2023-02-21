import styled from '@emotion/styled';

export const ResumeCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 20px;
  & a:hover {
    text-decoration: underline;
  }
`;

export const Name = styled.span`
  font-weight: 800;
  font-size: 20px;
`;

export const Position = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: #a2a2a2;
  margin: 5px 0;
`;

export const ContentTitle = styled.span`
  font-weight: 600;
  font-size: 18px;
  color: #363436;
  margin-right: 2px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const Content = styled.span`
  font-weight: 400;
  font-size: 13px;
  margin: 2px 0;
  color: #363436;
`;
