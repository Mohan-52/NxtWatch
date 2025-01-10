import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#fff')};
`

export const FormContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#000' : '#fff')};
  box-shadow: ${props =>
    props.isDarkTheme
      ? '10px 10px 5px #000'
      : '10px 10px 5px rgb(248, 245, 245)'};
  padding: 30px;
  width: 400px;
  text-align: center;
`

export const WebLogo = styled.img`
  width: 150px;
  line-height: 48px;
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 30px;
  text-align: left;
`

export const SyledLabels = styled.label`
  color: ${props => (props.isDarkTheme ? '#fff' : '#0f0f0f')};
`

export const StyledInput = styled.input`
  height: 40px;
  outline: none;
  padding: 5px;
  border-radius: 8px;
  margin-bottom: 10px;
  background-color: transparent;
  border: ${props => (props.isDarkTheme ? '1px solid #fff' : '1px solid #000')};
  color: ${props => (props.isDarkTheme ? '#fff' : '#000')};
`

export const CheckBox = styled.input`
  margin-right: 10px;
`

export const InlinePara = styled.p`
  color: ${props => (props.isDarkTheme ? '#fff' : '#0f0f0f')};
  display: inline;
`

export const SubmitBtn = styled.button`
  background-color: #3b82f6;
  border: none;
  cursor: pointer;
  color: #fff;
  padding: 10px;
  border-radius: 8px;
`

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`

export const ErrorMsgPara = styled.p`
  color: #ff0000;
`
