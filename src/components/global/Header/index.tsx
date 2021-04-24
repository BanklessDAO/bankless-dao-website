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
              <HeaderNavItem>Claim</HeaderNavItem>
            </NextLink>
            <NextLink href="/governance">
              <HeaderNavItem>Governance</HeaderNavItem>
            </NextLink>
            <NextLink href="/mission">
              <HeaderNavItem>Mission</HeaderNavItem>
            </NextLink>
            <NextLink href="/resources">
              <HeaderNavItem>Resources</HeaderNavItem>
            </NextLink>
          </nav>
          <ConnectWalletButton isConnected={false} />
        </HeaderNavContainer>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
