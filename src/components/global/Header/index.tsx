import { useRef, useState } from 'react'
import NextLink from 'next/link'

import { useDetectOutsideClick } from 'src/hooks/useDetectOutsideClick'

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
              <a onClick={() => setMobileNavIsActive(false)}>
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
                  <NextLink href="https://medium.com/bankless-dao/announcing-bankless-dao-133220f5efd8">
                    <a onClick={handleDropdownItemClick}>Announcement Post</a>
                  </NextLink>
                </li>
                <li>
                  <NextLink href="https://medium.com/bankless-dao/bankless-dao-genesis-proposal-18c24caf4485">
                    <a onClick={handleDropdownItemClick}>Genesis Proposal</a>
                  </NextLink>
                </li>
                <li>
                  <NextLink href="https://medium.com/bankless-dao/getting-started-with-bankless-dao-94b0b60e052e">
                    <a onClick={handleDropdownItemClick}>
                      Getting Started Guide
                    </a>
                  </NextLink>
                </li>
              </DropdownContainer>
            </DropdownNavItem>
          </HeaderNav>
          <ConnectWalletButton />
        </HeaderNavContainer>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
