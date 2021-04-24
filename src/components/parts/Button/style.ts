import styled from 'styled-components'
import { colors } from 'src/theme'

const Button = styled.button`
  padding: ${({ thin }) => (thin ? '5px 8px' : '10px 30px')};
  font-size: 19px;
  line-height: 26px;
  border-radius: 6px;
  text-transform: uppercase;
  border: 1px solid transparent;
`

export const RedButton = styled(Button)`
  color: ${colors.white};
  background: ${colors.red};
  border-color: ${colors.red};
`

export const GrayButton = styled(Button)`
  color: ${colors.white};
  background: ${colors.lightGray};
  border-color: ${colors.white};
`

export const WhiteButton = styled(Button)`
  color: ${colors.black};
  background: ${colors.white};
  border-color: ${colors.red};
`

export const PinkButton = styled(Button)`
  color: ${colors.white};
  background: ${colors.pink};
  border-color: ${colors.red};
`

export const GreenButton = styled(Button)`
  color: ${colors.white};
  background: ${colors.lime};
  border-color: ${colors.green};
`
