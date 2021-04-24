import styled from 'styled-components'
import { _Wrapper, _Container } from '../style'
import { colors } from 'src/theme'

export const FooterWrapper = styled(_Wrapper)`
  background: ${colors.black};
  padding-top: 10px;
  padding-bottom: 10px;
  color: ${colors.white};
`

export const FooterContainer = styled(_Container)`
  display: flex;
`
