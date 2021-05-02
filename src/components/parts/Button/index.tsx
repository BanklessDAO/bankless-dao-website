import {
  RedButton,
  GreenButton,
  PinkButton,
  WhiteButton,
  GrayButton,
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
  if ('gray' === theme)
    return (
      <GrayButton thin={thin} shadow={shadow} {...restProps}>
        {children}
      </GrayButton>
    )
  return (
    <RedButton thin={thin} shadow={shadow} {...restProps}>
      {children}
    </RedButton>
  )
}

export default Button
