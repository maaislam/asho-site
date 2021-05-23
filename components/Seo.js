import Head from 'next/head';
const Seo = ({ title, description, pageUrl, imgUrl }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={title} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />

      <meta property='og:url' content={pageUrl} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={imgUrl} />
      <meta property='og:image:secure_url' content={imgUrl} />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  );
};

Seo.defaultProps = {
  title: 'Ahead Social Organisation',
  keywords: 'welfare, microcredit, child care, farming',
  description: 'Get the latest news about Ahead Social Organisation',
};

export default Seo;
