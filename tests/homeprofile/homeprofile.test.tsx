import { render, screen } from '@testing-library/react';
import HomeProfile from '@/components/homeprofile/HomeProfile';

describe('HomeProfile', () => {
  it('renders the name, description and learn more link', () => {
    render(<HomeProfile />);
    const nameElement = screen.getByText(/YounHyuk Jung/i);
    const descriptionElement = screen.getByText(
      /꾸준히 성장하는 프론트엔드 개발자 정윤혁입니다 !/i
    );
    const linkElement = screen.getByRole('link', { name: /Learn more/i });
    expect(nameElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});

// 이 테스트는 구성요소가 올바른 이름, 설명 및 자세히 알아보기 링크를 렌더링하는지 확인하고 렌더링된 출력에서 ​​세 가지 요소가 모두 발견되면 통과합니다.
