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
  @media (min-width: ${breakpoints.md}) {
    padding-top: 95px;
    padding-bottom: 95px;
  }
`
export const Col2Row = styled.div`
  display: flex;
  align-items: center;
`
export const Col1 = styled.div`
  flex: 3;
  @media (min-width: ${breakpoints.md}) {
    flex: 2;
  }
`
export const Col2 = styled.div`
  display: flex;
  justify-content: center;
  flex: 2;
  @media (min-width: ${breakpoints.md}) {
    flex: 3;
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
