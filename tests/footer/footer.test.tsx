import { render, screen } from '@testing-library/react';
import Footer from '@/components/footer/Footer';

describe('Footer', () => {
  it('renders the social icons', () => {
    render(<Footer />);

    const githubIcon = screen.getByAltText('github');
    const notionIcon = screen.getByAltText('notion');
    const velogIcon = screen.getByAltText('velog');
    const emailIcon = screen.getByAltText('google-email');

    expect(githubIcon).toBeInTheDocument();
    expect(notionIcon).toBeInTheDocument();
    expect(velogIcon).toBeInTheDocument();
    expect(emailIcon).toBeInTheDocument();

    expect(githubIcon.parentElement.getAttribute('href')).toBe(
      'https://github.com/hyukzz'
    );
    expect(notionIcon.parentElement.getAttribute('href')).toBe(
      'https://younhyuk.notion.site/HYUK-s-28f4f1050f9249d2a7031405d59f7503'
    );
    expect(velogIcon.parentElement.getAttribute('href')).toBe(
      'https://velog.io/@richard'
    );
    expect(emailIcon.parentElement.getAttribute('href')).toBe(
      'https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=hyuk2richard@gmail.com'
    );
  });

  it('renders the blog info', () => {
    render(<Footer />);
    const blogInfo = screen.getByText(/hyukzz-blog/i);
    const parentLink = blogInfo.closest('a');
    expect(parentLink).toHaveAttribute(
      'href',
      'https://github.com/hyukzz/hyukzz.blog-ts'
    );
  });

  it('renders the copyright text', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const authorName = 'YounHyuk Jung';
    const copyrightText = `Copyright © ${currentYear} ${authorName}`;
    const element = screen.getByText(new RegExp(`^${copyrightText}`, 'i'));

    expect(element).toBeInTheDocument();
  });
});

// 1. 소셜 아이콘이 아이콘이 바닥글 구성요소에 표시되고 올바른 링크가 있는지 여부
// 2. Footer 구성요소에 "hyukzz-blog" 텍스트가 표시되는지 여부와 올바른 URL이 포함된 하이퍼링크인지 여부
// 3. Footer 구성 요소에 저작권 텍스트가 표시되는지, 연도 및 저자 이름이 올바른지 확인합니다.
