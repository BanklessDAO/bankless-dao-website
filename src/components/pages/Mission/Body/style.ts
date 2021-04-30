import styled from 'styled-components'
import { _Wrapper, _Container } from 'src/components/global/style'
import { colors, fontStyles, gradients, breakpoints } from 'src/theme'

export const SectionWrapper = styled(_Wrapper)`
  background: ${gradients.grayred};
  color: ${colors.white};
`
export const SectionContainer = styled(_Container)`
  padding-top: 50px;
  padding-bottom: 50px;
  max-width: 970px;
  @media (min-width: ${breakpoints.md}) {
    padding-top: 95px;
    padding-bottom: 95px;
  }
`
export const Heading = styled.h1`
  ${fontStyles.H1}
  margin-bottom: 30px;
  @media (max-width: ${breakpoints.md}) {
    ${fontStyles.H1m}
    margin-top: 30px;
  }
`
export const Subheading = styled.h3`
  ${fontStyles.H2m}
  margin-bottom: 30px;
  @media (min-width: ${breakpoints.md}) {
    ${fontStyles.H1m}
  }
`
export const Paragraph = styled.p`
  ${fontStyles.Pm}
  padding-bottom: 20px;
  @media (min-width: ${breakpoints.md}) {
    ${fontStyles.P}
  }
`
export const ButtonContainer = styled.div`
  button {
    margin-right: 30px;
    margin-top: 15px;
  }
`
