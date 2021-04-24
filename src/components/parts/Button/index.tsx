import {
  RedButton,
  GreenButton,
  PinkButton,
  WhiteButton,
  TransparentButton,
} from './style'

const Button = ({ theme = 'red', thin = false, children }) => {
  if ('green' === theme)
    return <GreenButton thin={thin}>{children}</GreenButton>
  if ('pink' === theme) return <PinkButton thin={thin}>{children}</PinkButton>
  if ('transparent' === theme)
    return <TransparentButton thin={thin}>{children}</TransparentButton>
  if ('white' === theme)
    return <WhiteButton thin={thin}>{children}</WhiteButton>
  return <RedButton thin={thin}>{children}</RedButton>
}

export default Button
