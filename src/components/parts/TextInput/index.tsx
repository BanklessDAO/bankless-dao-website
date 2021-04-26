import styled from 'styled-components'
import { colors } from 'src/theme'

const Input = styled.input`
  padding: 20px 30px;
  border: 1px solid ${colors.gray};
  border-radius: 10px;
`

const TextInput = ({ name, placeholder, ...restProps }) => {
  return (
    <Input type="text" name={name} placeholder={placeholder} {...restProps} />
  )
}

export default TextInput
