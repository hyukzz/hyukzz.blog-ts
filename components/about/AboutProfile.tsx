import Image from 'next/image';

import {
  AboutProfileContainer,
  ProfileText,
  ProfileTextSub,
} from './AboutProfile.style';

const AboutProfile = () => {
  return (
    <AboutProfileContainer>
      <Image
        src="/about/hyuk.jpg"
        className="image"
        alt="YounHyukJung"
        width={300}
        height={340}
      />
      <ProfileText>
        새로운 경험을 좋아하고, 꾸준히 성장하는 개발자입니다.
        <br />
        <br />
        최신 동향과 깔끔한 코드를 작성하는 것에 관심이 많으며, 정보를 기록하는
        것을 좋아합니다.
        <br />
        경영학을 전공했지만 프론트엔드에 온 힘을 쏟고 있습니다.
        <br />
        <br />
        운동과 여행을 좋아합니다.
        <br />
        <ProfileTextSub>
          United Kingdom, Switzerland, France, Japan, Italy, Spain, Singapore
        </ProfileTextSub>
        <br />
        <ProfileTextSub>Futsal, Cycling, Work out, Basketball</ProfileTextSub>
        <br />
        <br />
        <ProfileTextSub>위기에는 변화가 필요하다!</ProfileTextSub>
      </ProfileText>
    </AboutProfileContainer>
  );
};

export default AboutProfile;
