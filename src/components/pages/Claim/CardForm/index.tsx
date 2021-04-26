import { SectionWrapper, SectionContainer, Card } from './style'
import Button from 'src/components/parts/Button'
import TextInput from 'src/components/parts/TextInput'

const Section = () => {
  return (
    <SectionWrapper>
      <SectionContainer>
        <Card>
          <Card.Header>
            <Card.Header.Title>Claim BANK Token</Card.Header.Title>
            <Card.Header.Amount>00 BANK</Card.Header.Amount>
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
                  placeholder="Wallet Address or ENS name"
                  css={`
                    display: block;
                    width: 100%;
                    margin: 30px 0;
                  `}
                />
              </div>
              <div>
                <Button
                  theme="white"
                  css={`
                    width: 100%;
                  `}
                >
                  Claim XXX BANK Tokens
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
