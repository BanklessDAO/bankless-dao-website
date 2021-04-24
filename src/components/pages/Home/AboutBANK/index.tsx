import NextLink from 'next/link'
import Button from 'src/components/parts/Button'
import { SectionWrapper, SectionContainer, Heading, Paragraph } from './style'

const Section = () => {
  return (
    <SectionWrapper as="section">
      <SectionContainer>
        <div>
          <Heading>About BANK</Heading>
          <Paragraph>
            BANK is the native token of the Bankless DAO, which acts as a tool
            to coordinate activity and is awarded to community members for
            participation in the bankless movement.
          </Paragraph>
        </div>
        <div>
          <img />
        </div>
      </SectionContainer>
      <SectionContainer>
        <div>
          <Heading>BANK Distribution</Heading>
          <Paragraph>
            BANK is owned by the Bankless DAO and has been distributed under a
            fair launch mechanism with a 30% retroactive airdrop at genesis to
            community participants and 70% allocated to the community treasury.
          </Paragraph>
          <Paragraph>
            The remaining allocation of the community treasury will be vested
            over 3 years, starting at genesis.
          </Paragraph>
          <Paragraph>
            Recipients of the retroactive distribution will have the option to
            bestow Bankless, LLC with an allocation as described in the Genesis
            Proposal.
          </Paragraph>
          <NextLink href="#">
            <a>
              <Button theme="transparent">Genesis Proposal</Button>
            </a>
          </NextLink>
        </div>
        <div>
          <img />
        </div>
      </SectionContainer>
    </SectionWrapper>
  )
}

export default Section
