import styled from 'styled-components'
import { colors, fontStyles, breakpoints } from 'src/theme'

export const SectionWrapper = styled.div`
  background: ${colors.white};
  color: ${colors.black};
`
export const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
  }
`
export const Col1 = styled.img`
  object-fit: cover;
  flex: 2;
  line-height: 0;
  width: 100%;
  height: 900px;
  @media (min-width: ${breakpoints.md}) {
    max-width: 40%;
  }
  @media (min-width: ${breakpoints.lg}) {
    height: 1000px;
  }
`
export const Col2 = styled.div`
  flex: 3;
  padding: 36px;
  @media (min-width: ${breakpoints.md}) {
    padding-left: 60px;
    padding-right: 60px;
  }
`
export const Heading = styled.h2`
  ${fontStyles.H2}
  margin-bottom: 30px;
`
export const Subheading = styled.h4`
  ${fontStyles.H2m}
  margin-bottom: 20px;
`
export const Paragraph = styled.p`
  ${fontStyles.P}
  padding-bottom: 20px;
  max-width: 750px;
`
