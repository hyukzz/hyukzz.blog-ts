import { Project } from '@/types/types';

const projects: Project[] = [
  {
    id: 1,
    title: '오늘 뭐 먹지?',
    description:
      '"오늘 뭐먹지?"라는 현대인의 영원한 난제를 해결하고자 기획한 서비스 입니다. 여러분이 모바일, 웹 클라이언트의 현재 주소를 기반으로 도보 5~10분 거리의 식당 중 1곳을 추천해 드립니다!',
    url: 'https://github.com/hyukzz/ReMomukzzi',
    image: '/projects/깃허브 리드미.gif',
  },
  {
    id: 2,
    title: 'EveryFootball',
    description:
      'everyfootall은 매번 다수의 플레이어가 필요한 풋살을 플레이하기 위한 인원 모집 플랫폼입니다.',
    url: 'https://github.com/codestates/everyfootball',
    image: '/projects/풋살 메인페이지.gif',
  },
];

export default projects;
