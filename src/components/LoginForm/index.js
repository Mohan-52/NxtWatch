import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  BgContainer,
  FormContainer,
  WebLogo,
  StyledForm,
  SyledLabels,
  StyledInput,
  CheckBox,
  InlinePara,
  SubmitBtn,
  FlexDiv,
  ErrorMsgPara,
} from './styledComponents'
import SavedVideosContext from '../../context/SavedVideosContext'

class LoginForm extends Component {
  state = {username: '', password: '', showPwd: false, errorMsg: ''}

  getUsername = event => {
    this.setState({username: event.target.value})
  }

  getPassword = event => {
    this.setState({password: event.target.value})
  }

  showPassword = () => {
    this.setState(preState => ({showPwd: !preState.showPwd}))
  }

  successfulLogin = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  failureLogin = errorMsg => {
    this.setState({errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.successfulLogin(data.jwt_token)
    } else {
      this.failureLogin(data.error_msg)
    }
  }

  render() {
    const {username, password, showPwd, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const imgUrls = {
            light:
              'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png',
            dark:
              'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png',
          }
          return (
            <BgContainer isDarkTheme={isDarkTheme}>
              <FormContainer
                onSubmit={this.submitForm}
                isDarkTheme={isDarkTheme}
              >
                <WebLogo src={isDarkTheme ? imgUrls.dark : imgUrls.light} />
                <StyledForm onSubmit={this.submitForm}>
                  <SyledLabels htmlFor="username" isDarkTheme={isDarkTheme}>
                    USERNAME
                  </SyledLabels>
                  <StyledInput
                    id="username"
                    type="text"
                    placeholder="Username"
                    onChange={this.getUsername}
                    value={username}
                    isDarkTheme={isDarkTheme}
                  />
                  <SyledLabels htmlFor="password" isDarkTheme={isDarkTheme}>
                    PASSWORD
                  </SyledLabels>
                  <StyledInput
                    id="password"
                    type={showPwd ? 'text' : 'password'}
                    placeholder="Password"
                    onChange={this.getPassword}
                    value={password}
                    isDarkTheme={isDarkTheme}
                  />

                  <FlexDiv>
                    <CheckBox
                      type="checkbox"
                      onChange={this.showPassword}
                      checked={showPwd}
                    />
                    <InlinePara isDarkTheme={isDarkTheme}>
                      Show Password
                    </InlinePara>
                  </FlexDiv>

                  <SubmitBtn onClick={this.submitForm} type="button">
                    Submit
                  </SubmitBtn>

                  {errorMsg && <ErrorMsgPara>{`* ${errorMsg}`}</ErrorMsgPara>}
                </StyledForm>
              </FormContainer>
            </BgContainer>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }
}

export default LoginForm
