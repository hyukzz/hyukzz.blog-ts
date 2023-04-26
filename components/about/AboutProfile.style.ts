import styled from '@emotion/styled';
import mq from '@/utils/mq';

export const AboutProfileContainer = styled.section`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  & .image {
    border-radius: 8px;
    object-fit: cover;
  }
`;

export const ProfileText = styled.div`
  word-break: keep-all;
  padding: 0 20px;
  min-width: 300px;
  max-width: 400px;
  line-height: 25px;
  ${mq()({
    marginTop: ['30px', '0'],
  })}
`;

export const ProfileTextSub = styled.span`
  color: var(--tx-sub-dark);
`;
