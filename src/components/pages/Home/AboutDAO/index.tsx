import NextLink from 'next/link'
import Button from 'src/components/parts/Button'
import { SectionWrapper, SectionContainer, Heading, Paragraph } from './style'

const Section = () => {
  return (
    <SectionWrapper as="section">
      <SectionContainer>
        <div></div>
        <div>
          <Heading>Bankless DAO</Heading>
          <Paragraph>
            We have entered an era of internet-scale organizations.
          </Paragraph>
          <Paragraph>
            Ethereum`&apos;`s coordination power allows internet strangers with
            shared values and goals to organize under a common banner, and
            enables them to steer the world towards their future aspirations.
            Internet communities align with digital tokens and use them as tools
            to focus capital and labor into productive outputs in pursuit of a
            shared vision. Under community consensus, the private skills and
            resources of an individual can coalesce into public collective power
            and impart change upon the world.
          </Paragraph>
          <Paragraph>
            With this, humanity has unlocked the capability of building new,
            internet-scaled institutions aligned with the values of its members.
          </Paragraph>
          <Paragraph
            css={`
              margin-bottom: 50px;
            `}
          >
            We need this now, more than ever...{' '}
          </Paragraph>
          <NextLink href="/mission">
            <a>
              <Button theme="white">Read More</Button>
            </a>
          </NextLink>
        </div>
      </SectionContainer>
    </SectionWrapper>
  )
}

export default Section
