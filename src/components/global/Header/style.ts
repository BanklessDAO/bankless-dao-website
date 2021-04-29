import styled from 'styled-components'
import { _Wrapper, _Container } from '../style'
import { colors, fontStyles, breakpoints } from 'src/theme'

export const HeaderWrapper = styled(_Wrapper)`
  background: ${colors.black};
  padding-top: 10px;
  padding-bottom: 10px;
`
export const HeaderContainer = styled(_Container)`
  display: flex;
  align-items: center;
`

export const HeaderBrandContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 110px;
  height: 60px;

  @media (min-width: ${breakpoints.lg}) {
    width: 60px;
  }
`
export const MobileNavButton = styled.div`
  display: flex;
  @media (min-width: ${breakpoints.lg}) {
    display: none;
  }
`
export const LogoContainer = styled.div`
  max-height: 60px;
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
    opacity: ${({ active }) => (active ? 0.95 : 0)};
    visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
    transform: ${({ active }) =>
      active ? 'translateX(0)' : 'translateX(-20px)'};
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
    position: absolute;
    top: 80px;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    padding-left: 65px;
    padding-top: 30px;
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
export const DropdownCarot = styled.div`
  display: inline-block;
  padding-left: 15px;
`
export const DropdownNavItem = styled.div`
  display: inline-block;
  position: relative;
  padding-right: 70px;
`
export const DropdownContainer = styled.ul`
  display: flex;
  opacity: ${({ active }) => (active ? 1 : 0)};
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  flex-direction: column;
  align-items: center;
  position: absolute;
  list-style: none;
  background: ${colors.black};
  color: ${colors.white};
  transform: ${({ active }) =>
    active ? 'translateY(0)' : 'translateY(-20px)'};
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  padding: 10px 25px 10px 30px;

  @media (min-width: ${breakpoints.lg}) {
    padding: 20px;
  }

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
