import NextLink from 'next/link'
import Button from 'src/components/parts/Button'
import {
  SectionWrapper,
  SectionContainer,
  Heading,
  Subheading,
  Paragraph,
  ButtonContainer,
} from './style'

const Section = () => {
  return (
    <SectionWrapper as="section">
      <SectionContainer>
        <Heading>Our Mission</Heading>
        <Subheading>
          We have entered an era of internet-scale organizations.
        </Subheading>
        <Paragraph>
          The coordinating power of Ethereum allows internet strangers with
          shared values and goals to organize under a common banner, and enables
          them to steer the world towards their future aspirations. Internet
          communities align with digital tokens and use them as tools to focus
          capital and labor into productive outputs in pursuit of a shared
          vision. Under community consensus, the private skills and resources of
          an individual can coalesce into public collective power and impart
          change upon the world.
        </Paragraph>
        <Paragraph>
          With this, humanity has unlocked the capability of building new,
          internet-scaled institutions aligned with the values of its members.
        </Paragraph>{' '}
        <Subheading>We need this now, more than ever.</Subheading>
        <Paragraph>
          {' '}
          The previous institutions of the world have hit their limits of
          growth. Nation States, corporations, banks, Silicon Valley monopolies
          are no longer inclined to include additional members under their
          tents. The value in these entities accrues to a small few, and thus
          are fundamentally misaligned with the many people they serve. As these
          institutions scale, they become increasingly incapable of producing
          the future that is aligned with the individuals that comprise them.
        </Paragraph>
        <Paragraph>
          Bankless started in 2019 as a newsletter, added a podcast in 2020, and
          in 2021 is now a self-sustaining media company dedicated to
          democratizing access to information about the world of decentralized
          finance. The role of Bankless is to operate as a public good for
          education, media, and culture on crypto and all other bankless
          technologies that are being introduced into the world.
        </Paragraph>
        <Paragraph>
          The growth of Bankless has outpaced our wildest expectations, and the
          demand to help grow the bankless message has grown into spinoffs like
          Bankless Russia and Bankless France. These alternative flavors of
          Bankless are crucial to growing the bankless message into the global
          movement it can be.
        </Paragraph>
        <Paragraph>
          It’s clear there’s an energy behind bankless beyond the capability of
          a single media entity to harness.
        </Paragraph>
        <Subheading>
          The bankless movement is ready to grow out of the hands of the few and
          into the hands of the many.
        </Subheading>
        <Paragraph>
          The bankless message is a global banner, and the Bankless DAO is the
          organization that coordinates people under this banner. Only an
          internet-native organization is capable of growing an internet-scaled
          revolution, and thus we need a Bankless DAO to grow the bankless
          revolution.
        </Paragraph>
        <Paragraph>
          We want a money system by the people and for the people.
        </Paragraph>
        <Paragraph> We want to propagate crypto media and culture.</Paragraph>
        <Paragraph>We want to help the world go bankless.</Paragraph>
        <Paragraph>
          Help grow the world’s first-ever media and culture DAO. Bring your
          talents, time, and ideas. Join the revolution.
        </Paragraph>
        <Paragraph>Join the Bankless DAO!</Paragraph>
        <ButtonContainer>
          <NextLink href="/claim">
            <a>
              <Button theme="red" shadow>
                Claim your bank
              </Button>
            </a>
          </NextLink>
          <NextLink href="https://discord.gg/CGZaAReMxh">
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
