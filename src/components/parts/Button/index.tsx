import {
  RedButton,
  GreenButton,
  PinkButton,
  WhiteButton,
  TransparentButton,
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
  return (
    <RedButton thin={thin} shadow={shadow} {...restProps}>
      {children}
    </RedButton>
  )
}

export default Button
