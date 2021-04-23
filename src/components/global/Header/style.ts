import styled from 'styled-components'
import { _Wrapper, _Container } from '../style'

export const HeaderWrapper = styled(_Wrapper)`
  background: #111;
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
`

export const HeaderNavItem = styled.a`
  color: white;
  text-transform: uppercase;
  display: inline-block;
  padding: 12px 30px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const HeaderWalletConnectButton = styled.button`
  border: 1px solid
    ${({ isConnected }) => (isConnected ? '#14FF00' : '#ff0000')};
  background: ${({ isConnected }) =>
    isConnected ? '#14FF00' : 'rgba(255, 0, 0, 0.3)'};
  border-radius: 6px;
  padding: 8px 16px;
  color: white;
`
