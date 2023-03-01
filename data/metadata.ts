type Metadata = {
  repo: string;
  meta: {
    url: string;
    title: string;
    description: string;
  };
  author: string;
  home: {
    name: string;
    description: string;
  };
  social: {
    github: string;
    email: string;
    notion: string;
    velog: string;
  };
  analytics: {
    google: string;
  };
  ads: {
    google: string;
  };
};

const metadata: Metadata = {
  repo: 'https://github.com/hyukzz/hyukzz.blog-ts',
  meta: {
    url: 'https://hyukzz-blog.vercel.app',
    title: 'Hyukzz | Frontend Engineer',
    description: '꾸준히 성장하는 프론트엔드 개발자 정윤혁입니다 !',
  },
  author: 'YounHyuk Jung',
  home: {
    name: 'YounHyuk Jung',
    description: '꾸준히 성장하는 프론트엔드 개발자 정윤혁입니다 !',
  },
  social: {
    github: 'https://github.com/hyukzz',
    email:
      'https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=hyuk2richard@gmail.com',
    notion:
      'https://younhyuk.notion.site/HYUK-s-28f4f1050f9249d2a7031405d59f7503',
    velog: 'https://velog.io/@richard',
  },
  analytics: {
    google: 'G-RW0M0HRSFY',
  },
  ads: {
    google: 'ca-pub-7410391171994960',
  },
};

export default metadata;
