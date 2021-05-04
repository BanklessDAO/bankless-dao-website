import NextLink from 'next/link'
import Button from 'src/components/parts/Button'
import {
  SectionWrapper,
  SectionContainer,
  Heading,
  Eyebrow,
  Description,
  ButtonContainer,
} from './style'

const Section = () => {
  return (
    <SectionWrapper as="section">
      <SectionContainer>
        <Eyebrow>The Revolution Will Not Be Banked</Eyebrow>
        <Heading>The Bankless DAO welcomes you</Heading>
        <Description>
          Bankless DAO is a decentralized community driving adoption and
          awareness of bankless money systems like Ethereum, Bitcoin and DeFi
          through media, culture, and education.
        </Description>
        <ButtonContainer>
          <NextLink href="/claim">
            <a>
              <Button theme="red" shadow>
                Claim your bank
              </Button>
            </a>
          </NextLink>
          <NextLink href="https://discord.gg/bjPz2w9Zts ">
            <a>
              <Button theme="discord" shadow>
                Join the Discord
              </Button>
            </a>
          </NextLink>
        </ButtonContainer>
      </SectionContainer>
    </SectionWrapper>
  )
}

export default Section
