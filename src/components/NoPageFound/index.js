import Header from '../Header'
import SideBar from '../SideBar'

import {
  HeroSection,
  NotFoundContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundPara,
} from './styledComponents'
import SavedVideosContext from '../../context/SavedVideosContext'

const NoPageFound = () => (
  <SavedVideosContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const ImgUrl = {
        ligt:
          'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png',
        dark:
          'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png',
      }

      return (
        <>
          <Header />
          <HeroSection>
            <SideBar />
            <NotFoundContainer isDarkTheme={isDarkTheme}>
              <NotFoundImg src={isDarkTheme ? ImgUrl.dark : ImgUrl.ligt} />
              <NotFoundHeading isDarkTheme={isDarkTheme}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundPara isDarkTheme={isDarkTheme}>
                We are sorry, the page you requested could not be found.
              </NotFoundPara>
            </NotFoundContainer>
          </HeroSection>
        </>
      )
    }}
  </SavedVideosContext.Consumer>
)

export default NoPageFound
