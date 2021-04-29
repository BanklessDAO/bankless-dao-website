import { useRef, useState } from 'react'
import NextLink from 'next/link'
import Image from 'next/image'

import { useDetectOutsideClick } from 'src/utils/useDetectOutsideClick'

import ConnectWalletButton from './ConnectWalletButton'
import {
  HeaderWrapper,
  HeaderContainer,
  MobileNavButton,
  HeaderBrandContainer,
  HeaderNavContainer,
  HeaderNav,
  HeaderNavItem,
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
            <Image
              src="/logo.png"
              alt="Open Mobile Nav"
              width="60px"
              height="60px"
              onClick={handleMobileNavClick}
            />
          </MobileNavButton>
          <NextLink href="/">
            <a>
              <Image
                src="/logo.png"
                alt="Bankless Community Logo"
                width={60}
                height={60}
              />
            </a>
          </NextLink>
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
