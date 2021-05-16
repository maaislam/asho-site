import Layout from '../components/Layout';
import StickyHeaderContextProvider from '../context/StickyHeaderContext';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <StickyHeaderContextProvider>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </StickyHeaderContextProvider>
  );
}

export default MyApp;
