import styled from 'styled-components'
import { _Wrapper, _Container } from '../style'
import { colors, fontStyles, breakpoints } from 'src/theme'

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
  width: 120px;
  height: 60px;

  @media (min-width: ${breakpoints.lg}) {
    width: 60px;
  }
`
export const MobileNavButton = styled.div`
  display: inline-block;
  @media (min-width: ${breakpoints.lg}) {
    display: none;
  }
`
export const HeaderNavContainer = styled.div`
  flex: 1;
  justify-content: flex-end;
  display: flex;
  align-items: center;
`
export const HeaderNav = styled.nav`
  @media (max-width: ${breakpoints.lg}) {
    background: ${colors.black};
    opacity: ${({ active }) => (active ? 1 : 0)};
    visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
    transform: ${({ active }) =>
      active ? 'translateX(0)' : 'translateX(-20px)'};
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
    position: absolute;
    top: 74px;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    padding-left: 65px;
    width: 350px;
  }
  @media (max-width: ${breakpoints.md}) {
    padding-left: 0;
    width: 300px;
  }
`
export const HeaderNavItem = styled.a`
  ${fontStyles.H3}
  color: ${({ active }) => (active ? colors.red : colors.white)};
  text-transform: uppercase;
  display: inline-block;
  padding: 12px 30px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
export const DropdownNavItem = styled.div`
  display: inline-block;
  position: relative;
  padding-right: 50px;
`
export const DropdownContainer = styled.ul`
  display: flex;
  opacity: ${({ active }) => (active ? 1 : 0)};
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  flex-direction: column;
  align-items: center;
  padding: 20px 15px;
  position: absolute;
  list-style: none;
  background: ${colors.black};
  color: ${colors.white};
  transform: ${({ active }) =>
    active ? 'translateY(0)' : 'translateY(-20px)'};
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;

  a {
    color: ${colors.white};
    text-decoration: none;
    display: block;
    margin-top: 5px;
    margin-bottom: 5px;
    &:hover {
      text-decoration: underline;
    }
  }
`
