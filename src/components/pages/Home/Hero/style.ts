import styled from 'styled-components'
import { _Wrapper, _Container } from 'src/components/global/style'
import { gradients, colors, fontStyles, breakpoints } from 'src/theme'

export const SectionWrapper = styled(_Wrapper)`
  background: ${gradients.grayred};
  color: ${colors.white};
`
export const SectionContainer = styled(_Container)`
  padding-top: 50px;
  padding-bottom: 50px;
  @media (min-width: ${breakpoints.md}) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`
export const Heading = styled.h1`
  ${fontStyles.H2}
  margin-bottom: 20px;
  @media (min-width: ${breakpoints.md}) {
    ${fontStyles.H1}
  }
`
export const Eyebrow = styled.strong`
  display: inline-block;
  margin-bottom: 20px;
  ${fontStyles.H3}
`
export const Description = styled.p`
  margin-bottom: 50px;
  max-width: 800px;
`
export const ButtonContainer = styled.div`
  button {
    margin-right: 30px;
  }
`
