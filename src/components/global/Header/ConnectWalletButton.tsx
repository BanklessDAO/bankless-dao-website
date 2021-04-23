import { HeaderWalletConnectButton } from './style'

const Button = ({ isConnected = false }) => {
  return (
    <HeaderWalletConnectButton isConnected={isConnected}>
      {isConnected ? 'Connected' : 'Connect a Wallet'}
    </HeaderWalletConnectButton>
  )
}

export default Button
