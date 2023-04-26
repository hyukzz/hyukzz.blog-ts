import { Project } from '@/types/types';

const projects: Project[] = [
  {
    id: 1,
    title: '오늘의 일기',
    description: '오늘의 기분과 일기를 하루에 하나씩 작성해보세요.',
    url: 'https://github.com/hyukzz/today-diary',
    image: '/projects/오늘의 일기.gif',
  },
  {
    id: 2,
    title: 'Todo 앱',
    description:
      '유저별 Todo를 관리할 수 있는 웹사이트입니다. 각각의 유저 정보를 통해 이용해 보세요.',
    url: 'https://github.com/hyukzz/wanted-pre-onboarding-frontend',
    image: '/projects/todo 수정.gif',
  },
  {
    id: 3,
    title: '오늘 뭐 먹지? 모바일앱',
    description:
      '"오늘 뭐먹지?"라는 현대인의 영원한 난제를 해결하고자 기획한 서비스 입니다. 여러분이 모바일, 웹 클라이언트의 현재 주소를 기반으로 도보 5~10분 거리의 식당 중 1곳을 추천해 드립니다!',
    url: 'https://github.com/hyukzz/momukzzi-app',
    image: '/projects/뭐먹지 앱 랜덤 메뉴 추천.gif',
  },
  {
    id: 4,
    title: '오늘 뭐 먹지?',
    description:
      '"오늘 뭐먹지?"라는 현대인의 영원한 난제를 해결하고자 기획한 서비스 입니다. 여러분이 모바일, 웹 클라이언트의 현재 주소를 기반으로 도보 5~10분 거리의 식당 중 1곳을 추천해 드립니다!',
    url: 'https://github.com/hyukzz/ReMomukzzi',
    image: '/projects/깃허브 리드미.gif',
  },
  {
    id: 5,
    title: 'EveryFootball',
    description:
      'everyfootall은 매번 다수의 플레이어가 필요한 풋살을 플레이하기 위한 인원 모집 플랫폼입니다.',
    url: 'https://github.com/codestates/everyfootball',
    image: '/projects/풋살 메인페이지.gif',
  },
];

export default projects;
