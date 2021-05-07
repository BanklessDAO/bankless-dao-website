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
  const dropdownRefs = useRef({})

  const [
    isResourcesDropdownActive,
    setResourcesDropdownActive,
  ] = useDetectOutsideClick(dropdownRefs.current['resources'], false)
  const [
    isGovernanceDropdownActive,
    setGovernanceDropdownIsActive,
  ] = useDetectOutsideClick(dropdownRefs.current['governance'], false)

  const handleResourcesDropdownClick = () => {
    setResourcesDropdownActive(!isResourcesDropdownActive)
    setGovernanceDropdownIsActive(false)
  }

  const handleGovernanceDropdownClick = () => {
    setResourcesDropdownActive(false)
    setGovernanceDropdownIsActive(!isGovernanceDropdownActive)
  }

  const handleDropdownItemClick = () => {
    setGovernanceDropdownIsActive(false)
    setResourcesDropdownActive(false)
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
            <DropdownNavItem>
              <HeaderNavItem
                tabIndex="0"
                active={currentPage.includes('governance')}
                onClick={handleGovernanceDropdownClick}
              >
                Governance
                <DropdownCarot>
                  <img
                    src={
                      isGovernanceDropdownActive
                        ? '/images/icon-carot-up.svg'
                        : '/images/icon-carot-down.svg'
                    }
                    alt={
                      isGovernanceDropdownActive
                        ? 'Close Dropdown'
                        : 'Open Dropdown'
                    }
                    width={20}
                    height={10}
                  />
                </DropdownCarot>
              </HeaderNavItem>
              <DropdownContainer
                ref={(el) => (dropdownRefs.current['governance'] = el)}
                active={isGovernanceDropdownActive}
              >
                <li>
                  <NextLink href="https://forum.bankless.community/">
                    <a onClick={handleDropdownItemClick}>Forum</a>
                  </NextLink>
                </li>
                <li>
                  <NextLink href="https://snapshot.org/#/banklessvault.eth">
                    <a onClick={handleDropdownItemClick}>Vote</a>
                  </NextLink>
                </li>
              </DropdownContainer>
            </DropdownNavItem>
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
                onClick={handleResourcesDropdownClick}
              >
                Resources
                <DropdownCarot>
                  <img
                    src={
                      isResourcesDropdownActive
                        ? '/images/icon-carot-up.svg'
                        : '/images/icon-carot-down.svg'
                    }
                    alt={
                      isResourcesDropdownActive
                        ? 'Close Dropdown'
                        : 'Open Dropdown'
                    }
                    width={20}
                    height={10}
                  />
                </DropdownCarot>
              </HeaderNavItem>
              <DropdownContainer
                ref={(el) => (dropdownRefs.current['resources'] = el)}
                active={isResourcesDropdownActive}
              >
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
