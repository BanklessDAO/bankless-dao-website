import { SectionWrapper, SectionContainer, Card } from './style'
import Button from 'src/components/parts/Button'
import TextInput from 'src/components/parts/TextInput'
import { useActiveWeb3React, useWalletWeb3React } from 'src/hooks'
import { useEffect, useState } from 'react'
import { useClaim, useUserClaimData } from 'src/hooks/useClaim'
import { toFixed } from 'src/utils'
const Section = () => {
  const walletConnected = useWalletWeb3React().active
  const activeAccount = useActiveWeb3React().account
  const [account, setAccount] = useState('')
  const claimData = useUserClaimData(account)
  const displayNumber = claimData
    ? toFixed((parseInt(claimData.amount) / 10 ** 18).toPrecision(6))
    : undefined
  const [pending, setPending] = useState(false)
  const [done, setDone] = useState(false)
  useEffect(() => {
    if (activeAccount) {
      setAccount(activeAccount)
    }
  }, [activeAccount])

  useClaim(claimData, pending, setPending, setDone)

  return (
    <SectionWrapper>
      <SectionContainer>
        <Card>
          <Card.Header>
            <Card.Header.Title>Claim BANK Token</Card.Header.Title>
            <Card.Header.Amount>
              {claimData && !done ? displayNumber : '0'} BANK
            </Card.Header.Amount>
          </Card.Header>
          <Card.Body>
            <Card.Body.Description>
              Enter an ETH wallet address to start your BANK claim. If the
              address has any claimable BANK, it will be sent to them upon
              submission.
            </Card.Body.Description>
            <form>
              <div>
                <label style={{ fontWeight: 600 }}>
                  Recipient Address / ENS
                </label>
                <TextInput
                  name="address"
                  placeholder="Wallet Address / ENS name"
                  css={`
                    display: block;
                    width: 100%;
                    margin: 30px 0;
                  `}
                  onChange={(event) => {
                    setAccount(event.target.value)
                    if (done) {
                      setDone(false)
                    }
                  }}
                  value={account}
                />
              </div>
              <div>
                <Button
                  theme={
                    walletConnected && claimData && !pending && !done
                      ? ''
                      : 'pink'
                  }
                  css={`
                    width: 100%;
                  `}
                  onClick={(event) => {
                    event.preventDefault()
                    setPending(true)
                  }}
                  disabled={!walletConnected || !claimData || pending || done}
                >
                  {done
                    ? 'BANK Claimed!'
                    : pending
                    ? 'Claim pending...'
                    : claimData
                    ? `${
                        walletConnected ? '' : 'Connect to '
                      }Claim ${displayNumber} BANK tokens`
                    : account.length > 0
                    ? 'No BANK available for this account'
                    : 'Enter a Wallet Address or ENS name'}
                </Button>
              </div>
            </form>
          </Card.Body>
        </Card>
      </SectionContainer>
    </SectionWrapper>
  )
}

export default Section
