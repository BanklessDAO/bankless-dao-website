import NextLink from 'next/link'
import Image from 'next/image'

import ConnectWalletButton from './ConnectWalletButton'
import {
  HeaderWrapper,
  HeaderContainer,
  HeaderBrandContainer,
  HeaderNavContainer,
  HeaderNavItem,
} from './style'

const Header = () => {
  return (
    <HeaderWrapper as="header">
      <HeaderContainer>
        <HeaderBrandContainer>
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
          <nav>
            <NextLink href="/claim">
              <HeaderNavItem tabIndex="0">Claim</HeaderNavItem>
            </NextLink>
            <NextLink href="/governance">
              <HeaderNavItem tabIndex="0">Governance</HeaderNavItem>
            </NextLink>
            <NextLink href="/mission">
              <HeaderNavItem tabIndex="0">Mission</HeaderNavItem>
            </NextLink>
            <NextLink href="/resources">
              <HeaderNavItem tabIndex="0">Resources</HeaderNavItem>
            </NextLink>
          </nav>
          <ConnectWalletButton isConnected={false} />
        </HeaderNavContainer>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
