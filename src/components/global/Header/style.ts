import styled from 'styled-components'
import { _Wrapper, _Container } from '../style'
import { colors } from 'src/theme'

export const HeaderWrapper = styled(_Wrapper)`
  background: ${colors.black};
  padding-top: 7px;
  padding-bottom: 7px;
`
export const HeaderContainer = styled(_Container)`
  display: flex;
  align-items: center;
`

export const HeaderBrandContainer = styled.div`
  flex: 1;
  height: 60px;
`
export const HeaderNavContainer = styled.div`
  display: flex;
  align-items: center;
`

export const HeaderNavItem = styled.a`
  color: ${colors.white};
  text-transform: uppercase;
  display: inline-block;
  padding: 12px 30px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
