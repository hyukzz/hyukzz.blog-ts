import { Html, Head, Main, NextScript } from 'next/document';

function Document() {
  const setThemeMode = `
    function getThemeMode() {
        const theme = window.localStorage.getItem('theme')
        return theme ? theme : 'dark'
    }
    document.body.dataset.theme = getThemeMode()
  `;

  return (
    <Html lang='ko'>
      <Head>
        <link href='' rel='shortcut icon' />
      </Head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: setThemeMode }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
