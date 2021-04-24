import styled from 'styled-components'
import { _Wrapper, _Container } from 'src/components/global/style'
import { gradient, colors, fontStyles } from 'src/theme'

export const SectionWrapper = styled(_Wrapper)`
  background: ${gradient};
  color: ${colors.white};
`
export const SectionContainer = styled(_Container)`
  padding-top: 50px;
  padding-bottom: 50px;
  @media (min-width: 768px) {
    padding-top: 150px;
    padding-bottom: 150px;
  }
`
export const Heading = styled.h1`
  ${fontStyles.H2}
  @media (min-width: 768px) {
    ${fontStyles.H1}
  }
`
export const Eyebrow = styled.strong`
  margin-bottom: 15px;
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
