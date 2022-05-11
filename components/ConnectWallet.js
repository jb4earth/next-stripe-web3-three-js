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
  const address = useAddress();
  const network = useNetwork();



    const [ state, dispatch ] = React.useContext(AddressContext)
    state.address = address
    console.log(state.address)
    console.log('CW.js')

  // If a wallet is connected, show address, chainId and disconnect button
  if (state.address) {
    return (
      <div>
        Address: {state.address}
        <br />
        Chain ID: {network[0].data.chain && network[0].data.chain.id}
        <br />
        <button onClick={disconnectWallet}>Disconnect</button>
      </div>
    );
  }

  // If no wallet is connected, show connect wallet options
  return (
    <div>
      <button onClick={() => connectWithCoinbaseWallet()}>
        Connect Coinbase Wallet
      </button>
      <button onClick={() => connectWithMetamask()}>Connect MetaMask</button>
      <button onClick={() => connectWithWalletConnect()}>
        Connect WalletConnect
      </button>
    </div>
  );
};
