import {
  RedButton,
  GreenButton,
  PinkButton,
  WhiteButton,
  TransparentButton,
} from './style'

const Button = ({ theme = 'red', thin = false, shadow = false, children }) => {
  if ('green' === theme)
    return (
      <GreenButton thin={thin} shadow={shadow}>
        {children}
      </GreenButton>
    )
  if ('pink' === theme)
    return (
      <PinkButton thin={thin} shadow={shadow}>
        {children}
      </PinkButton>
    )
  if ('transparent' === theme)
    return (
      <TransparentButton thin={thin} shadow={shadow}>
        {children}
      </TransparentButton>
    )
  if ('white' === theme)
    return (
      <WhiteButton thin={thin} shadow={shadow}>
        {children}
      </WhiteButton>
    )
  return (
    <RedButton thin={thin} shadow={shadow}>
      {children}
    </RedButton>
  )
}

export default Button
