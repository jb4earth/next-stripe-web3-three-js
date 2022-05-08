import { AppProps } from 'next/app'
import { ThirdwebProvider } from '@thirdweb-dev/react';




import '../styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  const desiredChainId = 80001;
   /* Make sure that your app is wrazpped with these contexts.
   * If you're using React, you'll have to replace the Component setup with {children}
   */
  return (
    <>
    <ThirdwebProvider desiredChainId={desiredChainId}>
      {/* @ts-ignore */}
      <Component {...pageProps} />
    </ThirdwebProvider>
    </>
  );
}

export default MyApp
