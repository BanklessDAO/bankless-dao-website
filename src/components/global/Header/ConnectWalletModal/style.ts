import styled from 'styled-components'
import { breakpoints, colors, fontStyles, gradients } from 'src/theme'

export const TokenModal = styled.div`
  display: flex;
  opacity: ${({ active }) => (active ? 1 : 0)};
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 375px;
  max-height: ${(props) => (props.claimNotice === true ? '465px' : '436px')};

  list-style: none;
  background: ${gradients.black};
  color: ${colors.white};
  transform: ${({ active }) =>
    active ? 'translateY(0)' : 'translateY(-20px)'};
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  padding: 0px 21px 0px 21px;
  border: 1px solid ${colors.white};
  border-radius: 6px;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.13);

  // Ref: TokenModal.BankBalance { paddingBottom: var(--claimNotice) }
  --claimNotice: ${(props) => (props.claimNotice === true ? '20px' : '25px')};

  @media (min-width: ${breakpoints.lg}) {
    padding: 10px 57px 0px 57px;
    max-width: 650px;
    max-height: 600px;
    --claimNotice: ${(props) => (props.claimNotice === true ? '18px' : '25px')};
  }
`
TokenModal.TitleRow = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 20px 0px;
  @media (min-width: ${breakpoints.lg}) {
    padding-bottom: 30px;
  }
`
TokenModal.Title = styled.h4`
  ${fontStyles.H3}
  width:100%;
  text-align: center;
  @media (min-width: ${breakpoints.lg}) {
    ${fontStyles.H2}
  }
`
TokenModal.Close = styled.img`
  cursor: pointer;
  position: absolute;
  @media (min-width: ${breakpoints.lg}) {
    margin-top: 15px;
  }
`
TokenModal.AddressRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 0px;
  @media (min-width: ${breakpoints.lg}) {
    justify-content: space-between;
    padding: 13px 0px;
  }
`
TokenModal.AddressName = styled.div`
  ${fontStyles.Small}
  font-weight: bold;
  padding: 0px 5px;

  @media (min-width: ${breakpoints.lg}) {
    padding: 0px;
    ${fontStyles.H3m}
    font-weight: bold;
  }
`
TokenModal.WalletIcon = styled.div`
  width: 15px;
  height: 25px;
  .paper {
    height: 15px !important;
    width: 15px !important;
  }
  .paper svg * {
    position: relative;
    height: 100%;
    width: 100%;
  }
  @media (min-width: ${breakpoints.lg}) {
    width: 25px;
    height: 25px;
    .paper {
      height: 25px !important;
      width: 25px !important;
    }
    .paper svg * {
      position: relative;
      height: 100%;
      width: 100%;
    }
  }
`
TokenModal.ToggleAddress = styled.img`
  width: 15px;
  height: 11px;
  cursor: pointer;
  @media (min-width: ${breakpoints.lg}) {
    width: 26px;
    height: 19px;
  }
`
TokenModal.WalletActionsRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 0px;
  @media (min-width: ${breakpoints.lg}) {
    padding-bottom: 40px;
  }
`
TokenModal.WalletAction = styled.div`
  ${fontStyles.Small}
  align-items: top;
  padding: 25px 9px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    vertical-align: middle;
    margin-right: 9px;
  }
  &:hover {
    text-decoration: underline;
  }
  @media (min-width: ${breakpoints.lg}) {
    padding: 10px 12px;
  }
`
TokenModal.BigRow = styled.div`
  border: 1px solid ${colors.white};
  border-radius: 6px;
  width: 100%;
  padding-top: 19px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
TokenModal.BankTitle = styled.h3`
  ${fontStyles.H3}
  font-weight: normal;
`
TokenModal.BigBank = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  padding-top: 5px;
  @media (min-width: ${breakpoints.lg}) {
    padding-top: 15px;
  }
  img {
    margin-top: 10px;
  }
  strong {
    ${fontStyles.H1}
    font-size: 60px;
    padding-right: 8px;
    @media (min-width: ${breakpoints.lg}) {
      ${fontStyles.H1}
      padding-right: 20px;
    }
  }
`
TokenModal.BankBalance = styled.div`
  text-align: center;
  padding-bottom: var(--claimNotice);
`
TokenModal.UnclaimedNotice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0px;
  background: ${colors.white};
  color: ${colors.black};
  width: 100%;
  cursor: pointer;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  padding: 12px 3px 11px 3px;
  @media (min-width: ${breakpoints.lg}) {
    margin-top: 10px;
    padding: 5px 3px 3px 3px;
  }
  img {
    margin: 0px 5px;
  }
  span {
    ${fontStyles.Small}
    @media (min-width: ${breakpoints.lg}) {
      ${fontStyles.H3}
      font-weight: normal;
    }
  }
`
TokenModal.ToolRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
TokenModal.ToolItem = styled.div`
  ${fontStyles.Small}
  text-align: center;
  cursor: pointer;
  @media (min-width: ${breakpoints.lg}) {
    ${fontStyles.P}
  }
  &:hover {
    text-decoration: underline;
  }
`
