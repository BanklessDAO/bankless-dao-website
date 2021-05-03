import NextLink from 'next/link'
import Button from 'src/components/parts/Button'
import {
  SectionWrapper,
  SectionContainer,
  Col1,
  Col2,
  Heading,
  Subheading,
  Paragraph,
} from './style'

const Section = () => {
  return (
    <SectionWrapper as="section">
      <SectionContainer>
        <Col1
          src="/images/node-graph.png"
          srcset="/images/node-graph-mobile.png 320w, /images/node-graph.png 768w"
          alt="Node Graph Illustration"
        />
        <Col2>
          <Heading>Bankless DAO</Heading>
          <Subheading>
            We have entered an era of internet-scale organizations.
          </Subheading>
          <Paragraph>
            Ethereum's coordination power allows internet strangers with shared
            values and goals to organize under a common banner, and enables them
            to steer the world towards their future aspirations. Internet
            communities align with digital tokens and use them as tools to focus
            capital and labor into productive outputs in pursuit of a shared
            vision. Under community consensus, the private skills and resources
            of an individual can coalesce into public collective power and
            impart change upon the world.
          </Paragraph>
          <Paragraph>
            With this, humanity has unlocked the capability of building new,
            internet-scaled institutions aligned with the values of its members.
          </Paragraph>
          <Subheading
            css={`
              margin-bottom: 30px;
            `}
          >
            We need this now, more than ever...{' '}
          </Subheading>
          <NextLink href="/mission">
            <a>
              <Button theme="white">Read More</Button>
            </a>
          </NextLink>
        </Col2>
      </SectionContainer>
    </SectionWrapper>
  )
}

export default Section
