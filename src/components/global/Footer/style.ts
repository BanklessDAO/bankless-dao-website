import styled from 'styled-components'
import { _Wrapper, _Container } from '../style'
import { colors, fontStyles, breakpoints } from 'src/theme'

export const FooterWrapper = styled(_Wrapper)`
  background: ${colors.black};
  padding-top: 10px;
  padding-bottom: 10px;
  color: ${colors.white};
`

export const FooterContainer = styled(_Container)`
  padding-top: 20px;
`

export const BrandRow = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 30px;
  strong {
    margin-left: 10px;
    ${fontStyles.H2m}
  }
  @media (max-width: ${breakpoints.md}) {
    justify-content: center;
  }
`
export const CopyRow = styled.div`
  max-width: 600px;
  padding-bottom: 30px;
  @media (max-width: ${breakpoints.md}) {
    text-align: center;
    margin: 0 auto;
    ${fontStyles.Tiny}
  }
`
export const CopyrightRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding-bottom: 10px;

  @media (max-width: ${breakpoints.md}) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

export const IconsCol = styled.div`
  display: flex;
  align-items: center;
  a {
    margin: 0 15px 20px;
    @media (min-width: ${breakpoints.md}) {
      margin: 0 30px 0 0;
    }
  }
`
export const CopyrightCol = styled.div`
  @media (max-width: ${breakpoints.md}) {
    ${fontStyles.Tiny}
  }
`
