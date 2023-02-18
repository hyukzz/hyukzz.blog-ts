import { render } from '@testing-library/react';
import Title from '@/components/title/Title';

describe('Title', () => {
  it('renders the title and description text', () => {
    const title = 'Test Title';
    const des = 'Test Description';
    const { getByText } = render(<Title title={title} des={des} />);
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(des)).toBeInTheDocument();
  });
});

// 이 테스트는 구성 요소가 올바른 제목 및 설명 텍스트를 렌더링하는지 확인하고 렌더링된 출력에서 ​​두 요소가 모두 발견되면 통과합니다.
