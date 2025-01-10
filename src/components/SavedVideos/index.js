import Loader from 'react-loader-spinner'
import Header from '../Header'
import SideBar from '../SideBar'
import SavedVideosContext from '../../context/SavedVideosContext'

import ShowSavedVideos from '../ShowSavedVideos'

import {
  ViewsContainer,
  HeroSection,
  NoVideosContainer,
  NoVideoHeading,
  NoVideoImg,
  NoSavedPara,
} from './styledComponents'

const SavedVideos = () => {
  const noSavedVideosView = isDarkTheme => (
    <NoVideosContainer isDarkTheme={isDarkTheme}>
      <NoVideoImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <NoVideoHeading isDarkTheme={isDarkTheme}>
        No Saved Videos found
      </NoVideoHeading>
      <NoSavedPara isDarkTheme={isDarkTheme}>
        You can save your videos while watching them
      </NoSavedPara>
    </NoVideosContainer>
  )

  return (
    <SavedVideosContext.Consumer>
      {value => {
        const {savedVideoList, isDarkTheme} = value
        const showNovideoVies = savedVideoList.length === 0
        return (
          <>
            <Header />
            <HeroSection>
              <SideBar />
              {showNovideoVies ? (
                noSavedVideosView(isDarkTheme)
              ) : (
                <ShowSavedVideos />
              )}
            </HeroSection>
          </>
        )
      }}
    </SavedVideosContext.Consumer>
  )
}

export default SavedVideos
