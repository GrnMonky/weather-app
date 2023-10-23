// pages/_app.tsx
import '../app/globals.css'; // Import your global CSS, which should include Tailwind CSS
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
