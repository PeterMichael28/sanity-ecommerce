import '@/styles/globals.css'
import '@/styles/Home.css'
import '@/styles/Contact.css'
import '@/styles/Header.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout';
import { wrapper } from "../store/store";
import toast, { Toaster } from 'react-hot-toast';

 function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component { ...pageProps } />
      <Toaster />
    </Layout>
  );
}


export default wrapper.withRedux(App);