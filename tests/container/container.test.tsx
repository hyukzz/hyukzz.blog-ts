import { render } from '@testing-library/react';
import Container from '@/components/container/Container';

describe('Container component', () => {
  it('renders the children', () => {
    const { getByText } = render(
      <Container>
        <p>Hello world</p>
      </Container>
    );
    expect(getByText('Hello world')).toBeInTheDocument();
  });
});

// 이 테스트는 구성 요소가 자식을 제대로 렌더링하는지 확인합니다
