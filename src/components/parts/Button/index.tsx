import { RedButton, GreenButton, PinkButton } from './style'

const Button = ({ theme = 'red', thin = false, children }) => {
  if ('green' === theme)
    return <GreenButton thin={thin}>{children}</GreenButton>
  if ('pink' === theme) return <PinkButton thin={thin}>{children}</PinkButton>
  return <RedButton thin={thin}>{children}</RedButton>
}

export default Button
