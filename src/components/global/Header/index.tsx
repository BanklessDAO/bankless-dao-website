import { useRef, useState } from 'react'
import NextLink from 'next/link'

import { useDetectOutsideClick } from 'src/utils/useDetectOutsideClick'

import ConnectWalletButton from './ConnectWalletButton'
import {
  HeaderWrapper,
  HeaderContainer,
  MobileNavButton,
  LogoContainer,
  HeaderBrandContainer,
  HeaderNavContainer,
  HeaderNav,
  HeaderNavItem,
  DropdownCarot,
  DropdownNavItem,
  DropdownContainer,
} from './style'

const Header = ({ currentPage = '' }) => {
  const dropdownRef = useRef(null)
  const [isDropdownActive, setDropdownIsActive] = useDetectOutsideClick(
    dropdownRef,
    false
  )
  const handleDropdownClick = () => setDropdownIsActive(!isDropdownActive)

  const handleDropdownItemClick = () => {
    setDropdownIsActive(!isDropdownActive)
    setMobileNavIsActive(false)
  }

  const [isMobileNavActive, setMobileNavIsActive] = useState(false)
  const handleMobileNavClick = () => setMobileNavIsActive(!isMobileNavActive)
  return (
    <HeaderWrapper as="header">
      <HeaderContainer thin>
        <HeaderBrandContainer>
          <MobileNavButton>
            <img
              src={
                isMobileNavActive
                  ? '/images/icon-close.svg'
                  : '/images/icon-mobile-nav.svg'
              }
              alt="Open Mobile Nav"
              width={30}
              height={30}
              onClick={handleMobileNavClick}
            />
          </MobileNavButton>
          <LogoContainer>
            <NextLink href="/">
              <a>
                <img
                  src="/logo.svg"
                  alt="Bankless Community Logo"
                  width={60}
                  height={60}
                />
              </a>
            </NextLink>
          </LogoContainer>
        </HeaderBrandContainer>
        <HeaderNavContainer>
          <HeaderNav active={isMobileNavActive}>
            <NextLink href="/claim">
              <HeaderNavItem
                tabIndex="0"
                active={currentPage.includes('/claim')}
                onClick={() => setMobileNavIsActive(false)}
              >
                Claim
              </HeaderNavItem>
            </NextLink>
            <NextLink href="/governance">
              <HeaderNavItem
                tabIndex="0"
                active={currentPage.includes('governance')}
                onClick={() => setMobileNavIsActive(false)}
              >
                Governance
              </HeaderNavItem>
            </NextLink>
            <NextLink href="/mission">
              <HeaderNavItem
                tabIndex="0"
                active={currentPage.includes('mission')}
                onClick={() => setMobileNavIsActive(false)}
              >
                Mission
              </HeaderNavItem>
            </NextLink>
            <DropdownNavItem>
              <HeaderNavItem
                tabIndex="0"
                active={currentPage.includes('resources')}
                onClick={handleDropdownClick}
              >
                Resources
                <DropdownCarot>
                  <img
                    src={
                      isDropdownActive
                        ? '/images/icon-carot-up.svg'
                        : '/images/icon-carot-down.svg'
                    }
                    alt={isDropdownActive ? 'Close Dropdown' : 'Open Dropdown'}
                    width={20}
                    height={10}
                  />
                </DropdownCarot>
              </HeaderNavItem>
              <DropdownContainer ref={dropdownRef} active={isDropdownActive}>
                <li>
                  <NextLink href="#">
                    <a onClick={handleDropdownItemClick}>
                      How to claim your Bankless Badge
                    </a>
                  </NextLink>
                </li>
                <li>
                  <NextLink href="#">
                    <a onClick={handleDropdownItemClick}>
                      How to use your Bankless Badge
                    </a>
                  </NextLink>
                </li>
              </DropdownContainer>
            </DropdownNavItem>
          </HeaderNav>
          <ConnectWalletButton isConnected={false} />
        </HeaderNavContainer>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
