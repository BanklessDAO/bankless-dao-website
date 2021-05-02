import {
  RedButton,
  GreenButton,
  PinkButton,
  WhiteButton,
  TransparentButton,
  DiscordButton,
} from './style'

const Button = ({
  theme = 'red',
  thin = false,
  shadow = false,
  children,
  ...restProps
}) => {
  if ('green' === theme)
    return (
      <GreenButton thin={thin} shadow={shadow} {...restProps}>
        {children}
      </GreenButton>
    )
  if ('pink' === theme)
    return (
      <PinkButton thin={thin} shadow={shadow} {...restProps}>
        {children}
      </PinkButton>
    )
  if ('transparent' === theme)
    return (
      <TransparentButton thin={thin} shadow={shadow} {...restProps}>
        {children}
      </TransparentButton>
    )
  if ('white' === theme)
    return (
      <WhiteButton thin={thin} shadow={shadow} {...restProps}>
        {children}
      </WhiteButton>
    )
  if ('discord' === theme)
    return (
      <DiscordButton thin={thin} shadow={shadow} {...restProps}>
        {children}
      </DiscordButton>
    )
  return (
    <RedButton thin={thin} shadow={shadow} {...restProps}>
      {children}
    </RedButton>
  )
}

export default Button
