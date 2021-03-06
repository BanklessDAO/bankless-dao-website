import styled from 'styled-components'
import { _Wrapper, _Container } from 'src/components/global/style'
import { colors, fontStyles, breakpoints } from 'src/theme'

export const SectionWrapper = styled(_Wrapper)`
  background: ${colors.white};
  color: ${colors.black};
  text-align: center;
`
export const SectionContainer = styled(_Container)`
  padding-top: 50px;
  padding-bottom: 60px;
  @media (min-width: ${breakpoints.md}) {
    padding-top: 95px;
    padding-bottom: 130px;
  }
`
export const Heading = styled.h2`
  ${fontStyles.H1m}
  margin-bottom: 30px;
  @media (min-width: ${breakpoints.md}) {
    ${fontStyles.H1}
  }
`
export const SubHeading = styled.h3`
  ${fontStyles.H2m}
  color: ${colors.gray};
  @media (min-width: ${breakpoints.md}) {
    ${fontStyles.H2}
  }
`
export const Paragraph = styled.p`
  ${fontStyles.P}
  padding-bottom: 110px;
  max-width: 700px;
  margin: 0 auto;
`
export const FatDate = styled.strong`
  display: block;
  ${fontStyles.P}
  font-weight: 600;
  color: ${colors.red};
`
export const Subtext = styled.strong`
  display: block;
  ${fontStyles.H3m}
  color: ${colors.black};
  @media (min-width: ${breakpoints.md}) {
    ${fontStyles.H3}
  }
`
export const Col2Row = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
  }
`
export const Col1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 300px;
  justify-content: space-between;
  align-items: center;
  max-width: 600px;
  @media (max-width: ${breakpoints.md}) {
    margin-bottom: 50px;
  }
`
export const ImageContainer = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
