import {withRouter} from 'react-router-dom'
import {
  SideBarContainer,
  RoutesContainer,
  Para,
  ContactContainer,
  ConactH1,
  ImgsContainer,
  ScoialMediaImgs,
  EnjoyPara,
  HomeIcon,
  SaveIcon,
  TrendIcon,
  GamingIcon,
} from './styledComponents'

import SavedVideosContext from '../../context/SavedVideosContext'

const SideBar = props => {
  const {history} = props
  const routePath = history.location.pathname

  return (
    <SavedVideosContext.Consumer>
      {value => {
        const {isDarkTheme, showSideBar} = value
        return (
          <SideBarContainer isDarkTheme={isDarkTheme} visibility={showSideBar}>
            <div>
              <RoutesContainer
                to="/"
                isDarkTheme={isDarkTheme}
                isActive={routePath === '/'}
              >
                <HomeIcon isActive={routePath === '/'} />
                <Para>Home</Para>
              </RoutesContainer>

              <RoutesContainer
                to="/trending"
                isDarkTheme={isDarkTheme}
                isActive={routePath === '/trending'}
              >
                <TrendIcon isActive={routePath === '/trending'} />
                <Para>Trending</Para>
              </RoutesContainer>
              <RoutesContainer
                to="/gaming"
                isDarkTheme={isDarkTheme}
                isActive={routePath === '/gaming'}
              >
                <GamingIcon isActive={routePath === '/gaming'} />
                <Para>Gaming</Para>
              </RoutesContainer>
              <RoutesContainer
                to="/saved-videos"
                isDarkTheme={isDarkTheme}
                isActive={routePath === '/saved-videos'}
              >
                <SaveIcon isActive={routePath === '/saved-videos'} />
                <Para>Saved Videos</Para>
              </RoutesContainer>
            </div>
            <ContactContainer>
              <ConactH1 isDarkTheme={isDarkTheme}>CONTACT US</ConactH1>
              <ImgsContainer>
                <ScoialMediaImgs
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <ScoialMediaImgs
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <ScoialMediaImgs
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </ImgsContainer>
              <EnjoyPara isDarkTheme={isDarkTheme}>
                Enjoy! Now to see your Channels and recommendations!
              </EnjoyPara>
            </ContactContainer>
          </SideBarContainer>
        )
      }}
    </SavedVideosContext.Consumer>
  )
}

export default withRouter(SideBar)
