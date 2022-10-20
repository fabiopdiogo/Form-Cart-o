import styled from 'styled-components'

const InputContainer = styled.div`
  width: 100%
`
const StyledLabel = styled.p`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
`
const StyledInput = styled.input`
  width: 100%;
  border: 1px solid ${props => props.theme.inputBorder};
  background-color: ${props => props.theme.inputBackground};
  padding: 15px 20px;
  box-sizing: border-box;
  border-radius: 10px;

  ${props => props.error && `border: 2px solid ${props.theme.error};`}

  &:focus {
    outline: none
  }
`

const Input = ({label, ...props}) => {

  return (
    <InputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput placeholder={label} {...props}/>
      
    </InputContainer>
  )
}

export default Input