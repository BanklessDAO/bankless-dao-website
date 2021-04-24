import styled from 'styled-components'
import { _Wrapper, _Container } from 'src/components/global/style'
import { colors, fontStyles, gradient } from 'src/theme'

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
export const Heading = styled.h2`
  ${fontStyles.H2}
  margin-bottom: 30px;
`
export const Paragraph = styled.p`
  ${fontStyles.P}
  padding-bottom: 20px;
`
