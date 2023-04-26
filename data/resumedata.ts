type ExperienceType = {
  name: string;
  position: string;
  period: string;
  content: string[];
};

type StackType = {
  stack: string;
  content: string[];
};

type Resumetype = {
  name: string;
  job: string;
  contact: string;
  about: string[];
  experience: ExperienceType[];
  stack: StackType[];
};

const resumedata: Resumetype = {
  name: '정윤혁',
  job: 'Frontend Engineer',
  contact: 'Email: hyuk2richard@gmail.com',
  about: [
    '신입 개발자로 취업 준비를 하며 프론트엔드 개발을 하고 있습니다.',
    '효율적인 개발을 지향하며, 클린 코드나 깔끔히 설계되어 있는 것을 좋아합니다.',
    '개발 중에 생긴 문제를 해결하기 위해 노력하며, 이를 기록하고 공부합니다.',
    '현재 프론트엔드 개발에서 유용하게 사용하는 기술 스택들을 공부하고 사용해 보는 것을 즐깁니다.',
    '유저들에게 제가 만든 프로젝트를 공유하고 공감할 수 있는 프론트엔드를 좋아합니다.',
  ],
  experience: [
    {
      name: 'Code States',
      position: 'Advanced software engineering, Immersive program (36기)',
      period: '2021.08 - 2022.05',
      content: [
        'Javascript 기반으로 풀스택 과정 학습',
        '프론트엔드 React 학습, 백엔드 Node.js 학습',
        '20주 동안 매일 알고리즘 문제 풀이',
        '20주 동안 매일 강도 높은 과제 수행 및 페어 프로그래밍과 코드 리뷰 경험',
        '협업 프로젝트 2회 진행',
      ],
    },
    {
      name: 'Code States 프론트엔드 심화 코스',
      position: 'React',
      period: '2022.08 - 2022.09',
      content: [
        '파트너사 사전과제 수행',
        'TypeScript 및 React 심화 학습',
        '5주간 그룹 모의 면접 수행',
      ],
    },
    {
      name: '우아한테크코스 프리코스',
      position: 'Vanila JS',
      period: '2022.10 - 2022.11',
      content: [
        '4주 동안 Javascript 기반  과제 수행',
        '아고라(토론 및 Q&A), 학습 콘텐츠 공유',
      ],
    },
    {
      name: '원티드 프리온보딩 프론트엔드 챌린지',
      position: 'React',
      period: '2023 02 ~ ing',
      content: [
        '사전과제 수행',
        '커리큘럼에 따른 기술 역량 향상',
        '취업 챌린지',
      ],
    },
  ],
  stack: [
    {
      stack: 'Next.js',
      content: ['블로그와 프로젝트를 해당 기술로 만들었습니다.'],
    },
    {
      stack: 'React',
      content: [
        'TypeScript를 이용해 개발 가능합니다.',
        'useEffect 등의 hook을 사용할 수 있습니다.',
        'Emotion, styled-components를 사용하고 있습니다.',
        'Redux를 사용할 수 있습니다.',
      ],
    },
    {
      stack: 'Javascript',
      content: ['ES6+ 문법에 더 익숙합니다.'],
    },
    {
      stack: 'Git',
      content: [
        'Github를 통해 관리할 수 있습니다.',
        'Branch를 분기해 사용할 수 있습니다.',
        'PR을 보내거나 승인할 수 있습니다.',
        '커밋 규칙을 따르며 사용 가능합니다.',
        '충돌 해결을 할 수 있습니다.',
      ],
    },
  ],
};

export default resumedata;
