import NextLink from 'next/link'
import Button from 'src/components/parts/Button'
import { SectionWrapper, SectionContainer, Heading, Paragraph } from './style'

const Section = () => {
  return (
    <SectionWrapper as="section">
      <SectionContainer>
        <div>
          <Heading>How to claim your BANK</Heading>
          <Paragraph>
            To seed distribution initially, we’re executing a retroactive
            airdrop for Bankless Community members ahead of{' '}
            <strong>May 4, 2021.</strong>
          </Paragraph>
        </div>
        <div>
          <div>
            <h6>Check if you’re eligible to receive BANK</h6>
            <img />
            <NextLink href="/claim">
              <a>
                <Button theme="white">Check Eligibility</Button>
              </a>
            </NextLink>
          </div>
          <div>
            <h6>Use BANK to Join the Bankless Discord</h6>
            <small>50k BANK required</small>
            <img />
            <NextLink href="#">
              <a>
                <Button theme="white">Join Discord</Button>
              </a>
            </NextLink>
          </div>
        </div>
      </SectionContainer>
    </SectionWrapper>
  )
}

export default Section
