import styled from 'styled-components'
import { _Wrapper, _Container } from 'src/components/global/style'
import { colors, fontStyles, gradients } from 'src/theme'

export const SectionWrapper = styled(_Wrapper)`
  background: ${gradients.grayred};
  color: ${colors.black};
`
export const SectionContainer = styled(_Container)`
  padding-top: 100px;
  padding-bottom: 300px;
`
export const Card = styled.div`
  max-width: 700px;
  background: ${colors.white};
  border: 1px solid ${colors.gray};
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.13);
  border-radius: 6px;
  margin: 0 auto;
  overflow: hidden;
`
Card.Header = styled.header`
  background: ${gradients.black};
  padding: 30px 15px 15px 15px;
  text-align: center;
`
Card.Header.Title = styled.h1`
  ${fontStyles.H3}
  color: ${colors.white};
`
Card.Header.Amount = styled.strong`
  ${fontStyles.H1}
  color: ${colors.red};
`
Card.Body = styled.div`
  padding: 30px;
`
Card.Body.Description = styled.p`
  ${fontStyles.P}
  color: ${colors.black};
  padding-bottom: 30px;
`
export const Heading = styled.h2`
  ${fontStyles.H1}
  margin-bottom: 30px;
`
export const SubHeading = styled.h3`
  ${fontStyles.H2}
  color: ${colors.gray};
`
export const Paragraph = styled.p`
  ${fontStyles.P}
  padding-bottom: 110px;
  max-width: 700px;
  margin: 0 auto;
`
