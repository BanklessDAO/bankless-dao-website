import Button from 'src/components/parts/Button'

const WalletButton = ({ isConnected = false }) => {
  return (
    <Button theme={isConnected ? 'lime' : 'pink'} thin={true}>
      {isConnected ? 'Connected' : 'Connect a Wallet'}
    </Button>
  )
}

export default WalletButton
