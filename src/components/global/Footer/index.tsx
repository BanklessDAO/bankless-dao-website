import NextLink from 'next/link'

import {
  FooterWrapper,
  FooterContainer,
  BrandRow,
  CopyRow,
  CopyrightRow,
  IconsCol,
  CopyrightCol,
} from './style'

const Footer = () => {
  return (
    <FooterWrapper as="footer">
      <FooterContainer thin>
        <BrandRow>
          <img
            src="/logo.svg"
            alt="Bankless Community Logo"
            width={60}
            height={60}
          />
          <strong>Bankless DAO</strong>
        </BrandRow>
        <CopyRow>
          Bankless DAO is a decentralized community driving adoption and
          awareness of bankless money systems like Ethereum, Bitcoin and DeFi
          through media, culture, and education.
        </CopyRow>
        <CopyrightRow>
          <IconsCol>
            <NextLink href="https://medium.com/bankless-dao">
              <a>
                <img
                  src="/images/icon-social-medium.svg"
                  alt="Medium Icon"
                  width={48}
                  height={27}
                />
              </a>
            </NextLink>
            <NextLink href="https://banklessdao.substack.com/">
              <a>
                <img
                  src="/images/icon-social-substack.svg"
                  alt="Substack Icon"
                  width={25}
                  height={28}
                />
              </a>
            </NextLink>
            <NextLink href="https://discord.gg/CGZaAReMxh">
              <a>
                <img
                  src="/images/icon-social-discord.svg"
                  alt="Discord Icon"
                  width={32}
                  height={35}
                />
              </a>
            </NextLink>
            <NextLink href="https://twitter.com/banklessDAO">
              <a>
                <img
                  src="/images/icon-social-twitter.svg"
                  alt="Twitter Icon"
                  width={35}
                  height={28}
                />
              </a>
            </NextLink>
            <NextLink href="https://github.com/BanklessHQ">
              <a>
                <img
                  src="/images/icon-social-github.svg"
                  alt="Github Icon"
                  width={32}
                  height={31}
                />
              </a>
            </NextLink>
          </IconsCol>
          <CopyrightCol>
            &copy; {new Date().getFullYear()} Bankless DAO
          </CopyrightCol>
        </CopyrightRow>
      </FooterContainer>
    </FooterWrapper>
  )
}

export default Footer
