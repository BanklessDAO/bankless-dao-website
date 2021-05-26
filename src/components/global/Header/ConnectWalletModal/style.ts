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
  max-height: 488px;
  list-style: none;
  background: ${gradients.black};
  color: ${colors.white};
  transform: ${({ active }) =>
    active ? 'translateY(0)' : 'translateY(-20px)'};
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  padding: 0px 21px 5px 21px;
  border: 1px solid ${colors.white};
  border-radius: 6px;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.13);

  @media (min-width: ${breakpoints.lg}) {
    max-width: 650px;
    max-height: 637px;
    padding: 10px 57px 10px 57px;
  }
`
TokenModal.TitleRow = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 20px 10px;
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
TokenModal.BigRow = styled.div`
  border-bottom: 1px solid ${colors.white};
  width: 100%;
  padding-top: 30px;
  padding-bottom: 40px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-bottom: 20px;
  }
  strong {
    ${fontStyles.H2}
  }
`
TokenModal.BalanceRow = styled.div`
  border-bottom: 1px solid ${colors.white};
  width: 100%;
  margin-bottom: 15px;
`
TokenModal.SupplyRow = styled.div`
  width: 100%;
`
TokenModal.StatLine = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px 15px;
`
