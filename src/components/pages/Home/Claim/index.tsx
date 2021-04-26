import NextLink from 'next/link'
import Image from 'next/image'
import Button from 'src/components/parts/Button'
import {
  SectionWrapper,
  SectionContainer,
  Heading,
  SubHeading,
  Paragraph,
  FatDate,
  Subtext,
  Col2Row,
  Col1,
  ImageContainer,
} from './style'

const Section = () => {
  return (
    <SectionWrapper as="section">
      <SectionContainer>
        <div>
          <Heading>How to claim your BANK</Heading>
          <Paragraph>
            To seed distribution initially, we’re executing a retroactive
            airdrop for Bankless Community members ahead of{' '}
            <FatDate>May 4, 2021.</FatDate>
          </Paragraph>
        </div>
        <Col2Row>
          <Col1>
            <div>
              <SubHeading>Check if you’re eligible to receive BANK</SubHeading>
            </div>
            <ImageContainer>
              <Image
                src="/images/icon-eligible.png"
                alt="Eligibility Icon"
                width="110"
                height="120"
              />
            </ImageContainer>
            <NextLink href="/claim">
              <a>
                <Button theme="white">Check Eligibility</Button>
              </a>
            </NextLink>
          </Col1>
          <Col1>
            <div>
              <SubHeading>Use BANK to Join the Bankless Discord</SubHeading>
              <Subtext>50k BANK required</Subtext>
            </div>
            <ImageContainer>
              <Image
                src="/images/icon-discord.png"
                alt="Discord Icon"
                width="101"
                height="110"
              />
            </ImageContainer>
            <NextLink href="#">
              <a>
                <Button theme="white">Join Discord</Button>
              </a>
            </NextLink>
          </Col1>
        </Col2Row>
      </SectionContainer>
    </SectionWrapper>
  )
}

export default Section
