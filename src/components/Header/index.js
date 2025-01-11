import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import SavedVideosContext from '../../context/SavedVideosContext'
import {
  NavBar,
  WebLogo,
  Ul,
  StyledLi,
  NavButtons,
  ThemeImg,
  OutlineBtn,
  PopupContainer,
  PopupText,
  ButtonGroup,
  PopupButton,
  ProfileImg,
  HamburgerIcon,
  LogoutIcon,
  ProfileLiCon,
  HamLiCon,
} from './styledComponents'

const Header = props => {
  const likeThemeImg = {
    webLogo:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png',
    themeImg: 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png',
  }

  const darkThemeImgs = {
    webLogo:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png',
    themeImg: 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png',
  }

  const handleLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <SavedVideosContext.Consumer>
      {value => {
        const {isDarkTheme, toggleTheme, toggleSideBar} = value
        return (
          <NavBar isDarkTheme={isDarkTheme}>
            <Link to="/">
              <WebLogo
                src={isDarkTheme ? darkThemeImgs.webLogo : likeThemeImg.webLogo}
                alt="nxt watch logo"
              />
            </Link>
            <Ul>
              <StyledLi>
                <NavButtons data-testid="theme" onClick={toggleTheme}>
                  <ThemeImg
                    src={
                      isDarkTheme
                        ? darkThemeImgs.themeImg
                        : likeThemeImg.themeImg
                    }
                  />
                </NavButtons>
              </StyledLi>
              <ProfileLiCon>
                <NavButtons>
                  <ProfileImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </NavButtons>
              </ProfileLiCon>
              <HamLiCon>
                <NavButtons onClick={toggleSideBar}>
                  <HamburgerIcon isDarkTheme={isDarkTheme} />
                </NavButtons>
              </HamLiCon>
              <HamLiCon>
                <Popup
                  modal
                  trigger={
                    <NavButtons>
                      <LogoutIcon isDarkTheme={isDarkTheme} />
                    </NavButtons>
                  }
                  position="center center"
                  className="popup-content"
                >
                  {close => (
                    <PopupContainer isDarkTheme={isDarkTheme}>
                      <PopupText isDarkTheme={isDarkTheme}>
                        Are you sure you want to logout?
                      </PopupText>
                      <ButtonGroup>
                        <PopupButton onClick={close}>Cancel</PopupButton>
                        <PopupButton
                          confirm
                          onClick={() => {
                            handleLogout()
                          }}
                        >
                          Confirm
                        </PopupButton>
                      </ButtonGroup>
                    </PopupContainer>
                  )}
                </Popup>
              </HamLiCon>
              <ProfileLiCon>
                <Popup
                  modal
                  trigger={
                    <OutlineBtn isDarkTheme={isDarkTheme}>Logout</OutlineBtn>
                  }
                  position="center center"
                  className="popup-content"
                >
                  {close => (
                    <PopupContainer isDarkTheme={isDarkTheme}>
                      <PopupText isDarkTheme={isDarkTheme}>
                        Are you sure you want to logout?
                      </PopupText>
                      <ButtonGroup>
                        <PopupButton onClick={close}>Cancel</PopupButton>
                        <PopupButton
                          confirm
                          onClick={() => {
                            handleLogout()
                          }}
                        >
                          Confirm
                        </PopupButton>
                      </ButtonGroup>
                    </PopupContainer>
                  )}
                </Popup>
              </ProfileLiCon>
            </Ul>
          </NavBar>
        )
      }}
    </SavedVideosContext.Consumer>
  )
}

export default withRouter(Header)
