import NextLink from 'next/link'
import Button from 'src/components/parts/Button'
import {
  SectionWrapper,
  SectionContainer,
  Col2Row,
  Col1,
  Col2,
  Heading,
  Paragraph,
} from './style'

const Section = () => {
  return (
    <SectionWrapper as="section">
      <SectionContainer>
        <Col2Row>
          <Col1>
            <Heading>About BANK</Heading>
            <Paragraph
              css={`
                margin-bottom: 20px;
              `}
            >
              BANK is the native token of the Bankless DAO, which acts as a tool
              to coordinate activity and is awarded to community members for
              participation in the bankless movement.
            </Paragraph>
            <NextLink href="https://medium.com/bankless-dao/announcing-bankless-dao-133220f5efd8">
              <a>
                <Button theme="gray">Read Announcement Post</Button>
              </a>
            </NextLink>
          </Col1>
          <Col2>
            <img
              src="/images/token-3d.png"
              alt="Token Render Art"
              width="210"
              height="210"
            />
          </Col2>
        </Col2Row>
      </SectionContainer>
      <SectionContainer>
        <Col2Row>
          <Col1>
            <Heading>BANK Distribution</Heading>
            <Paragraph>
              BANK is owned by the Bankless DAO and has been distributed under a
              fair launch mechanism with a 30% retroactive airdrop at genesis to
              community participants and 70% allocated to the community
              treasury.
            </Paragraph>
            <Paragraph>
              The remaining allocation of the community treasury will be vested
              over 3 years, starting at genesis.
            </Paragraph>
            <Paragraph
              css={`
                margin-bottom: 20px;
              `}
            >
              Recipients of the retroactive distribution will have the option to
              bestow Bankless, LLC with an allocation as described in the
              Genesis Proposal.
            </Paragraph>
            <NextLink href="https://medium.com/bankless-dao/bankless-dao-genesis-proposal-18c24caf4485">
              <a>
                <Button theme="gray">Genesis Proposal</Button>
              </a>
            </NextLink>
          </Col1>
          <Col2>
            <img
              src="/images/token-distribution-chart.png"
              alt="Token Render Art"
              width="308"
              height="350"
            />
          </Col2>
        </Col2Row>
      </SectionContainer>
    </SectionWrapper>
  )
}

export default Section
