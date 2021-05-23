import { AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import StickyHeaderContextProvider from '../context/StickyHeaderContext';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <StickyHeaderContextProvider>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </StickyHeaderContextProvider>
    </AnimatePresence>
  );
}

export default MyApp;
