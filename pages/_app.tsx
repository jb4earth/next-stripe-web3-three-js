import { AppProps } from 'next/app'
import { ThirdwebProvider } from '@thirdweb-dev/react';




import '../styles.css'

function MyApp({ Componentx, pageProps }: AppProps) {
  const desiredChainId = 80001;

  /**
   * Make sure that your app is wrapped with these contexts.
   * If you're using React, you'll have to replace the Component setup with {children}
   */
  return (
    <ThirdwebProvider desiredChainId={desiredChainId}>
      <Componentx {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp
