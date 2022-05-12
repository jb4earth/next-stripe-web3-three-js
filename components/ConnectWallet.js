import {
  useMetamask,
  useWalletConnect,
  useCoinbaseWallet,
  useNetwork,
  useAddress,
  useDisconnect,
} from '@thirdweb-dev/react';
import { AddressContext } from "../contexts/Address"
import React from "react"



export const ConnectWallet = () => {
  const connectWithCoinbaseWallet = useCoinbaseWallet();
  const connectWithMetamask = useMetamask();
  const connectWithWalletConnect = useWalletConnect();
  const disconnectWallet = useDisconnect();
  // const address =
  const network = useNetwork();



    const [ state, dispatch ] = React.useContext(AddressContext)
    state.address = useAddress();
    console.log(state)
    console.log('CW first.js')

    const disconnectWalletX = () => {
      // state.address = false
      // state.active = false
      dispatch({address: false,active:false})
      disconnectWallet()
      console.log(state)
      console.log('CW disconnect')
    }

  // If a wallet is connected, show address, chainId and disconnect button
  if (state.address) {
    state.active = true
    return (
      <>
        <button class="cw-button" onClick={() =>disconnectWalletX(state)}>Disconnect</button>
      </>
    );
  }

  // If no wallet is connected, show connect wallet options
  return (
    <>
      <button class="cw-button" onClick={() => connectWithCoinbaseWallet()}>
        Coinbase Wallet
      </button>
      <button class="cw-button" onClick={() => connectWithMetamask()}>MetaMask</button>
      <button class="cw-button" onClick={() => connectWithWalletConnect()}>
        WalletConnect
      </button>
    </>
  );
};
